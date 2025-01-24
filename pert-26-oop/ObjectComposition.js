// SEMUA YANG DIBAWAH INI MASALAH
class Character{
    constructor(name, health, position){
        this.name = name;
        this.health = health;
        this.position = position;
    }

    canMove(){
        console.log(`${this.name} move to ${this.position}!`);
    }
}

class Monster extends Character{
    canAttack(){
        console.log(`${this.name} attacks with a weapon!`)
    }
}


class Guardian extends Character{
    canDefend(){
        console.log(`${this.name} defends with a shield!`)
    }
}


class Wizard extends Character{
    canCastSpell(){
        console.log(`${this.name} casts a magic spell!`)
    }
}

class Warrios extends Character{
    canAttack(){
        console.log(`${this.name} attacks with a weapon!`)
    }

    canDefend(){
        console.log(`${this.name} defends with a shield!`)
    }
}



































