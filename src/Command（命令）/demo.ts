//������:��˳����£��ͻ���ͺ���ȫ����Ҫ֪�����˵ĳ�ʦ��˭�������ſͻ������Ϣ�Ķ�������һ�����

// ����Ļ��ֻ࣬������һ��ִ�з���
class Command {
    execute(arg?): void { }
}

// ��ʦ�࣬ÿ����ʦ�������������
class Cook {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeBread() {
        console.log(` ${this.name} �������`);
    }
    makeMeal() {
        console.log(` ${this.name} ������`);
    }
}

// ������ֻ��Ҫ���������ߺ�ִ�нӿ�
class SimpleCommand extends Command {
    // �����ߣ��ڵ��ϵͳ���ǳ�ʦ
    receiver: Cook;
}

// �������������
class BreadCommand extends SimpleCommand {
    constructor(cook: Cook) {
        super();
        this.receiver = cook;
    }
    execute() {
        this.receiver.makeBread();
    }
}

// �����������
class MealCommand extends SimpleCommand {
    constructor(cook: Cook) {
        super();
        this.receiver = cook;
    }
    execute() {
        this.receiver.makeMeal();
    }
}

// ϵͳ����ʱ��������ע�ᵽ�˵��ϣ����ɿɱ�����ʹ�õ��������
class Client {
    public static main(): void {
        const cook1 = new Cook('��ʦ1');
        const cook2 = new Cook('��ʦ2');

        // ���ɲ˵����ϼ����ۣ��˿Ϳ���ѡ����������
        const breadCommand: Command = new BreadCommand(cook1);
        const mealCommand: Command = new MealCommand(cook2);

        // �ͻ����ʱ����ȫ����Ҫ֪�����ĸ���ʦ���ģ�ֻ��Ҫ�Ӳ˵��ϵ���Ҫ�Ĳˣ����������
        // ��ʱ�Ѿ�����������Ĵ�����������ߵķ���
        // ����������������ϵͳ�е������ݣ��羭���������Ա�������ᶪʧ�����ߵ���Ϣ
        breadCommand.execute();
        mealCommand.execute();
    }
}
Client.main()

// ��ʦ1 �������
// ��ʦ2 ������




//�ɳ��������ȼ������������������б����˽����ߣ�����Ҫ�洢�����״̬��Ϣ����������ϴ�ִ�в����Ĳ���
class AdvancedCommand extends Command {
  // ������
  ball: Ball;
  // ����״̬��Ϣ���ƶ��ľ���
  pos: number;
  // ִ������ʱ�������ƶ���ͬʱ��¼���ƶ��ľ���
  execute(pos: number) {
    this.pos = pos;
    this.ball.moveToLeft(pos);
  }
  // ����ʱִ�з������
  unExecute() {
    this.ball.moveToRight(this.pos);
  }
}



//�����ͬʱ������������ﲻ��Ҫ��ʽ�Ľ����ߣ���Ϊÿ������Ѿ������˸��ԵĽ�����
class MacroCommand extends Command {
  // ���������б�
  cmdSet: Set<Command> = [];
  add(cmd: Command): void {
    this.cmdSet.add(cmd);
  }
  remove(cmd: Command): void {
    this.cmdSet.delete(cmd);
  }
  execute(): void {
    this.cmdSet.forEach((cmd: Command) => {
      cmd.execute();
    });
  }
}








