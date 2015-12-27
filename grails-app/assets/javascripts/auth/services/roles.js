//= wrapped

angular
    .module("auth")
    .constant("roles", {
        ADMIN: 'ADMIN',
        MANAGER: 'MANAGER',
        USER: 'USER'
    });