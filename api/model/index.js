const DB = require('../config')

const {
    hash,
    compare,
    hashSync
} = require('bcrypt');

const {
    createToken
} = require('../middleware/AuthenticateUser');

class User {
    login(req, res) {
        const {
            emailAddress,
            userPassword
        } = req.body;
        const querySt =
            `SELECT firstName, lastName, gender, emailAddress, userPassword, userProfile, DATE_FORMAT(joinDate, '%d-%m-%Y') AS user_joined 
        FROM users 
        WHERE emailAddress = '${emailAddress}' `;
        DB.query(querySt, async (err, data) => {
            if (err) throw err;
            if ((!data.length) || (data == null)) {
                res.status(401).json({
                    err: "Incorrect email address"
                });
            } else {
                await compare(userPassword,
                    data[0].userPassword,
                    (uErr, uResult) => {
                        if (uErr) throw uErr;
                        const jToken =
                            createToken({
                                emailAddress,
                                userPassword
                            });
                        res.cookie('Valid User',
                            jToken, {
                                maxAge: 3600000,
                                httpOnly: true
                            })
                        if (uResult) {
                            res.status(200).json({
                                msg: 'Logged In',
                                jToken,
                                result: data[0]
                            })
                        } else {
                            res.status(401).json({
                                err: 'Incorrect password'
                            })
                        }
                    })
            }
        })
    }
    fetchUsers(req, res) {
        const querySt =
            `
    SELECT firstName, lastName, gender, emailAddress, userPassword, userProfile, DATE_FORMAT(joinDate, '%d-%m-%Y') AS user_joined 
    FROM users;
    `;

        DB.query(querySt, (err, data) => {
            if (err) throw err;
            else res.status(200).json({
                results: data
            })
        })
    }
    fetchUser(req, res) {
        const querySt =
            `
    SELECT firstName, lastName, gender, emailAddress, userPassword, userProfile, DATE_FORMAT(joinDate, '%d-%m-%Y') AS user_joined 
    FROM users
    WHERE userID = ?;
    `;
        DB.query(querySt, [req.params.id],
            (err, data) => {
                if (err) throw err;
                else res.status(200).json({
                    results: data
                });
            })
    }
    async createUser(req, res) {
        let info = req.body;
        info.userPassword = await
        hash(info.userPassword, 15);
        let user = {
            email: info.emailAddress,
            userPassword: info.userPassword
        }

        const querySt =
            `INSERT INTO users
        SET ?;`;
        DB.query(querySt, [info], (err) => {
            if (err) {
                res.status(401).json({
                    err
                });
            } else {

                const jToken = createToken(user);
                res.cookie("Valid User", jToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({
                    msg: "Successfully added new user."
                })
            }
        })
    }
    updateUser(req, res) {
        let data = req.body;
        if (data.userPassword !== null ||
            data.userPassword !== undefined)
            data.userPassword = hashSync(data.userPassword, 15);
        const querySt =
            `
        UPDATE users
        SET ?
        WHERE userId = ?;
        `;

        DB.query(querySt, [data, req.params.id],
            (err) => {
                if (err) throw err;
                res.status(200).json({
                    msg: "User successfully updated."
                });
            })
    }
    deleteUser(req, res) {
        const querySt =
            `
        DELETE FROM users
        WHERE userID = ?;
        `;

        DB.query(querySt, [req.params.id],
            (err) => {
                if (err) throw err;
                res.status(200).json({
                    msg: "User was successfully deleted."
                });
            })
    }
}


class Product {
    fetchProducts(req, res) {
        const querySt =
            `SELECT productID, productName, productDescription, category, price, productQuantity, imgURL
    FROM products;
    `;
        DB.query(querySt, (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            })
        });
    }
    fetchProduct(req, res) {
        const querySt =
            ` SELECT productID, productName, productDescription, category, price, productQuantity, imgURL
    FROM products
    WHERE productID = ?;
    `;
        DB.query(querySt, [req.params.id], (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            })
        });

    }
    addProduct(req, res) {
        const strQry =
            `
        INSERT INTO products
        SET ?;
        `;
        DB.query(strQry, [req.body],
            (err) => {
                if (err) {
                    res.status(400).json({
                        err: "Unable to create new product."
                    });
                } else {
                    res.status(200).json({
                        msg: "Successfully created new product."
                    });
                }
            }
        );

    }
    updateProduct(req, res) {
        const querySt =
            `
        UPDATE products
        SET ?
        WHERE id = ?
        `;
        DB.query(querySt, [req.body, req.params.id],
            (err) => {
                if (err) {
                    res.status(400).json({
                        err: "Could not update product."
                    });
                } else {
                    res.status(200).json({
                        msg: "Product successfully updated"
                    });
                }
            }
        );

    }
    deleteProduct(req, res) {
        const querySt =
            `
        DELETE FROM products
        WHERE id = ?;
        `;
        DB.query(querySt, [req.params.id], (err) => {
            if (err) res.status(400).json({
                err: "Unable to find product."
            });
            res.status(200).json({
                msg: "Successfully deleted product."
            });
        })
    }
}

class Cart {
    fetchCart(req, res) {
        const strQry =
        `
        SELECT productName, price, imgURL 
        FROM users
        inner join cart on users.userID = cart.userID
        inner join products on cart.productID = products.productID
        where cart.userID = ${req.params.id};
        `;
        DB.query(strQry, (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            })
        });
    }
    addCart(req, res) {
        const strQry =
            `
        INSERT INTO cart
        SET ?;
        `;
        DB.query(strQry, [req.body],
            (err) => {
                if (err) {
                    res.status(400).json({
                        err: "Unable to add to cart."
                    });
                } else {
                    res.status(200).json({
                        msg: "Successfully added to cart."
                    });
                }
            }
        );

    }
    updateCart(req, res) {
        const querySt =
            `
        UPDATE cart
        SET ?
        WHERE cartID = ?
        `;
        DB.query(querySt, [req.body, req.params.id],
            (err) => {
                if (err) {
                    res.status(400).json({
                        err: "Could not update cart."
                    });
                } else {
                    res.status(200).json({
                        msg: "Cart successfully updated"
                    });
                }
            }
        );

    }
    deleteItemCart(req, res) {
        const querySt =
            `
        DELETE FROM cart
        WHERE productID = ?;
        `;

        DB.query(querySt, [req.params.id],
            (err) => {
                if (err) res.status(400).json({err: "Record not found"});
                res.status(200).json({
                    msg: "Item was removed."
                });
            })
    }
    deleteCart(req, res) {
        const querySt =
            `
        DELETE FROM cart
        WHERE userID = ?;
        `;

        DB.query(querySt, [req.params.id],
            (err) => {
                if (err) res.status(400).json({err: "Record not found"});
                res.status(200).json({
                    msg: "Cart has been cleared."
                });
            })
    }
}

module.exports = {
    User,
    Product,
    Cart
}