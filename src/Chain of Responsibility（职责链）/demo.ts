interface RequestData {
    name: string,
    increaseNum: number,
}

/**
 * ��������
 */
abstract class Handler {
    protected next: Handler;
    setNext(next: Handler) {
        this.next = next;
    }
    abstract processRequest(request: RequestData): void;
}

class IdentityValidator extends Handler {
    processRequest(request: RequestData) {
        if (request.name === 'yuanfeng') {
            console.log(`${request.name} �Ǳ���˾��Ա��`);
            this.next.processRequest(request);
        } else {
            console.log('���Ǳ���˾Ա��');
        }
    }
}

class Manager extends Handler {
    processRequest(request: RequestData) {
        if (request.increaseNum < 300) {
            console.log('����300����н������ֱ����׼��');
        } else {
            console.log(`${request.name}����нҪ�󳬹��˾����Ȩ�ޣ���Ҫ���߼�������`);
            this.next.processRequest(request);
        }
    }
}

class Boss extends Handler {
    processRequest(request: RequestData) {
        console.log('hehe������н�����������');
    }
}



class Client {
    public static main(): void {
        const identityValidator = new IdentityValidator();
        const manager = new Manager();
        const boss = new Boss();
        // ����ְ����
        identityValidator.setNext(manager);
        manager.setNext(boss);

        const request: RequestData = {
            name: 'yuanfeng',
            increaseNum: 500,
        };
        identityValidator.processRequest(request);
    }
}
Client.main()

// yuanfeng �Ǳ���˾��Ա��
// yuanfeng����нҪ�󳬹��˾����Ȩ�ޣ���Ҫ���߼�������
// hehe������н�����������
