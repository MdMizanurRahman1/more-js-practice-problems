const names = ['habul', 'babul', 'sabul', 'jabul', 'habul', 'cabul', 'tabul', 'modul', 'habul', 'babul', 'sabul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const realName = removeDuplicate(names);
console.log(realName);