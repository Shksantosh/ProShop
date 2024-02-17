import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Santosh shk',
        email: 'shk@email.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Sunil manji',
        email: 'manjiboy@email.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;