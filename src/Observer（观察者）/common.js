var salesOffices = {}; // ������¥��
salesOffices.clientList = []; // �����б���Ŷ����ߵĻص�����

salesOffices.listen = function( key, fn ){
    if ( !this.clientList[ key ] ){ // �����û�ж��Ĺ�������Ϣ����������Ϣ����һ�������б�
        this.clientList[ key ] = [];
    }
    this.clientList[ key ].push( fn ); // ���ĵ���Ϣ��ӽ���Ϣ�����б�
};

salesOffices.trigger = function(){ // ������Ϣ
    var key = Array.prototype.shift.call( arguments ), // ȡ����Ϣ����
    fns = this.clientList[ key ]; // ȡ������Ϣ��Ӧ�Ļص���������
    if ( !fns || fns.length === 0 ){ // ���û�ж��ĸ���Ϣ���򷵻�
        return false;
    }
    for( var i = 0, fn; fn = fns[ i++ ]; ){
        fn.apply( this, arguments ); // (2) // arguments �Ƿ�����Ϣʱ���͵Ĳ���
    }
};

salesOffices.listen( 'squareMeter88', function( price ){ // С������88 ƽ���׷��ӵ���Ϣ
    console.log( '�۸�= ' + price ); // ����� 2000000
});

salesOffices.listen( 'squareMeter110', function( price ){ // С�충��110 ƽ���׷��ӵ���Ϣ
    console.log( '�۸�= ' + price ); // ����� 3000000
});

salesOffices.trigger( 'squareMeter88', 2000000 ); // ����88 ƽ���׷��ӵļ۸�
salesOffices.trigger( 'squareMeter110', 3000000 ); // ����110 ƽ���׷��ӵļ۸�