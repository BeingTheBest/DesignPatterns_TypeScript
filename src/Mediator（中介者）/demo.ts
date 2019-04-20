// �����н���
abstract class Mediator {
    abstract contact(message: string, person: Human): void
}

// ����ͬ����
abstract class Human {
    name: string
    mediator: Mediator
    constructor(name: string, mediator: Mediator) {
        this.name = name
        this.mediator = mediator
    }
}

// 2�������ͬ����
// ������
class HouseOwner extends Human {
    contact(message: string) {
        console.log(`���� ${this.name} ������Ϣ ${message}`)
        this.mediator.contact(message, this)
    }
    getMessage(message: string) {
        console.log(`���� ${this.name} �յ���Ϣ ${message}`)
    }
}

// �����
class Tenant extends Human {
    contact(message: string) {
        console.log(`��� ${this.name} ������Ϣ ${message}`)
        this.mediator.contact(message, this)
    }
    getMessage(message: string) {
        console.log(`��� ${this.name} �յ���Ϣ ${message}`)
    }
}

// �����н���
class ConcreteMediator extends Mediator {
    private tenant: Tenant
    private houseOwner: HouseOwner
    setTenant(tenant: Tenant) {
        this.tenant = tenant
    }
    setHouseOwner(houseOwner: HouseOwner) {
        this.houseOwner = houseOwner
    }
    // ���н���������ͬ�¶���֮�����ϵ��ϵ
    contact(message: string, person: Human) {
        console.log('�н鴫����Ϣ')
        if (person === this.houseOwner) {
            this.tenant.getMessage(message)
        } else {
            this.houseOwner.getMessage(message)
        }
    }
}

class Client {
    public static main(): void {
        const mediator = new ConcreteMediator()
        const houseOwner = new HouseOwner('�ƴ����ֵķ���', mediator)
        const tenant = new Tenant('Զ��', mediator)
        // ���н���ע���Ա
        mediator.setHouseOwner(houseOwner)
        mediator.setTenant(tenant)
        // �н�ĳ�Աֻ��Ҫ������Ϣ��������Ҫ���ľ�������ߣ���ϵ��ϵ��ά�������н�����
        tenant.contact('�����ⷿ')
        houseOwner.contact('���з�����Ҫ����')
    }
}
Client.main()

// ��� Զ�� ������Ϣ �����ⷿ
// �н鴫����Ϣ
// ���� �ƴ����ֵķ��� �յ���Ϣ �����ⷿ
// ���� �ƴ����ֵķ��� ������Ϣ ���з�����Ҫ����
// �н鴫����Ϣ
// ��� Զ�� �յ���Ϣ ���з�����Ҫ����
