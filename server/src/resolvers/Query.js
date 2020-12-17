const Query = {
    name() {
        return 'Dan';
    },
    age() {
        return 50;
    },
    isSingle() {
        return false;
    },
    numbers() {
        return [30, 56, 79, 12, 65];
    },
    location() {
        return {
            state: 'New York',
            city: 'Albany'
        };
    },
    users(parent, args, ctx, info) {
        const {users} = ctx;
        return users;
    }
};

module.exports = Query;