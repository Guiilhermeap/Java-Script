function getAdmins (map) {
    let admins = [];
    for ([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map ();

usuarios.set('Guilherme', 'Admin');
usuarios.set('João', 'User');
usuarios.set('Ingryd', 'User');
usuarios.set('Jorge', 'User');
usuarios.set('Juliana', 'Admin');


console.log(getAdmins(usuarios));