export default {
    namespaced: true,

    state:{
        commodityList: {
            wheelchair:{
                name: '輪椅',
                commodity:[
                    { name:'高背輪椅', model:'康揚 5001', img:'wheelchair1.png', description:'椅背可平躺，腿部可抬起，扶手可掀起，輪椅可拆卸、收合。' },
                    { name:'高背輪椅', model:'康揚 仰樂多515', img:'wheelchair2.png', description:'椅背可平躺，扶手可掀起，輪椅可拆卸、收合。' },
                    { name:'低背輪椅', model:'康揚 飛揚825', img:'wheelchair3.png', description:'扶手可掀起，輪椅可拆卸、收合。' },
                    { name:'低背輪椅', model:'均佳 150', img:'wheelchair4.webp', description:'輪椅可收合。' },
                    { name:'低背輪椅', model:'杏華 JR200S', img:'wheelchair5.png', description:'輪椅可收合。' },
                ]
            },
            commodechair:{
                name: '便盆椅',
                commodity:[
                    { name:'便盆椅', model:'富士康 4301', img:'commodechair1.jpg', description:'有輪子，可推移。' },
                    { name:'便盆椅', model:'富士康 4542', img:'commodechair2.jpg', description:'有輪子，可推移，可收合。' },
                    { name:'高背便盆椅', model:'富士康 4351', img:'commodechair3.jpg', description:'有輪子，可推移，椅背可仰躺至45度角。' },
                    { name:'便盆椅', model:'富士康 4527', img:'commodechair4.jpg', description:'可收合。' },
                    { name:'便盆椅', model:'均佳 103', img:'commodechair5.webp', description:'可收合。' },
                    { name:'便盆椅', model:'杏華 BM1', img:'commodechair6.jpg', description:'' }, 
                ]
            },
            singleCrutch:{
                name: '單支拐杖',
                commodity:[
                    { name:'單支拐杖', model:'杏華 7501', img:'single-crutch1.png', description:'可調整拐杖長短。' },
                    { name:'單支拐杖', model:'杏華 7533', img:'single-crutch2.png', description:'可調整拐杖長短，可摺疊收合。' },
                    { name:'單支拐杖', model:'富士康 2204', img:'single-crutch3.jpg', description:'可調整拐杖長短，有四爪腳墊，可站立。' },
                    { name:'單支拐杖', model:'富士康 2205', img:'single-crutch4.jpg', description:'可調整拐杖長短，有四爪腳墊，可站立。' },
                ]
            },
            fourleggedCrutch:{
                name: '四腳拐',
                commodity:[
                    { name:'四腳拐', model:'富士康 2053', img:'fourlegged-crutch1.jpg', description:'可調整拐杖長短。' },
                    { name:'四腳拐', model:'富士康 2058', img:'fourlegged-crutch2.jpg', description:'可調整拐杖長短。' },
                    { name:'四腳拐', model:'富士康 2036', img:'fourlegged-crutch3.jpg', description:'可調整拐杖長短。' },
                    { name:'四腳拐', model:'富士康 2037', img:'fourlegged-crutch4.jpg', description:'可調整拐杖長短。' },
                    { name:'四腳拐', model:'富士康 2051', img:'fourlegged-crutch5.jpg', description:'可調整拐杖長短。' },
                ]
            },
            walker:{
                name: '助行器',
                commodity:[
                    { name:'助行器', model:'富士康 3428', img:'walker1.jpg', description:'可收合。' },
                    { name:'助行器', model:'富士康 3133', img:'walker2.jpg', description:'可收合。' },
                    { name:'助行器', model:'富士康 833', img:'walker3.jpg', description:'可收合，有輪子，手把處可調高低，手把處有剎車。' },
                    //{ name:'助行器', model:'', img:'walker3.jpg', description:'可收合，有輪子，手把處可調高低，手把處有剎車。' },
                    //{ name:'助行器', model:'', img:'walker3.jpg', description:'可收合，有輪子，手把處可調高低，手把處有剎車。' },
                ]
            },
            bathchair:{
                name: '沐浴椅',
                commodity:[
                    { name:'沐浴椅', model:'富士康 0010', img:'bathchair1.jpg', description:'可調整高低。' },
                    { name:'沐浴椅', model:'富士康 0013', img:'bathchair2.jpg', description:'可調整高低，椅背可拆除。' },
                    { name:'沐浴椅', model:'富士康 0015', img:'bathchair3.jpg', description:'可調整高低，椅背、扶手皆可拆除。' },
                    { name:'沐浴椅', model:'富士康 188', img:'bathchair4.jpg', description:'可調整高低，可收合。' },
                    { name:'沐浴椅', model:'杏華 9060', img:'bathchair5.jpg', description:'可調整高低。' },
                ]
            },
            airBed:{
                name: '氣墊床',
                commodity:[
                    { name:'氣墊床', model:'雃博 多美式3', img:'air-bed1.jpg', description:'' },
                    { name:'氣墊床', model:'淳碩 TS-10A', img:'air-bed2.webp', description:'' },
                    { name:'氣墊床', model:'淳碩 TS-505', img:'air-bed3.webp', description:'' },
                ]
            },
            wheelchairCushion:{
                name: '輪椅坐墊',
                commodity:[
                    { name:'輪椅坐墊', model:'雃博 羅荷', img:'wheelchair-cushion1.jpg', description:'' },
                    { name:'輪椅坐墊', model:'禾康 9905', img:'wheelchair-cushion2.jpg', description:'' },
                    //{ name:'輪椅坐墊', model:'', img:'wheelchair-cushion1.jpg', description:'' },
                    { name:'輪椅坐墊', model:'康揚 Vicair專家九O2', img:'wheelchair-cushion4.png', description:'' },
                ]
            },
            hospitalBed:{
                name: '病床',
                commodity:[
                    { name:'電動病床', model:'倍愛 BL-BH62', img:'hospital-bed1.jpg', description:'床面可升降，頭部可升降，腿部可升降。' },
                    { name:'電動病床', model:'康元 采唐2020', img:'hospital-bed2.jpg', description:'床面可升降，頭部可升降，腿部可升降。' },
                    { name:'手動病床', model:'仲鎂 2002', img:'hospital-bed3.png', description:'床面可升降，頭部可升降，腿部可升降。' },
                ]
            },
            shift:{
                name: '移位用品',
                commodity:[
                    { name:'移位腰帶', model:'杰奇 JM-230', img:'shift1.jpg', description:'' },
                    { name:'移位板', model:'天群 EZ-510', img:'shift2.jpg', description:'' },
                    { name:'移位滑墊', model:'天群 EZ-110', img:'shift3.jpeg', description:'' },
                    //{ name:'', model:'', img:'shift1.jpg', description:'' },
                ]
            },
            mobilityScooter:{
                name: '代步車',
                commodity:[
                    { name:'電動代步車', model:'必翔 TE-888SL', img:'mobility-scooter1.JPG', description:'座椅可調高低，扶手可掀，有車燈。' },
                    { name:'電動代步車', model:'建迪 HS-745', img:'mobility-scooter2.png', description:'座椅可調高低，扶手可掀，有車燈。' },
                    { name:'電動代步車', model:'建迪 HS-580', img:'mobility-scooter3.png', description:'座椅可調高低，扶手可掀，有車燈。' },
                ]
            },
            electricWheelchair:{
                name: '電動輪椅',
                commodity:[
                    //{ name:'', model:'', img:'', description:'' },
                    //{ name:'', model:'', img:'', description:'' },
                ]
            },
            oxygenGenerator:{
                name: '氧氣機',
                commodity:[
                    { name:'氧氣機', model:'飛利浦', img:'oxygen-generator1.jpeg', description:'' },
                    { name:'氧氣機', model:'亞適', img:'oxygenGenerator2.jpg', description:'' },
                    //{ name:'氧氣機', model:'', img:'', description:'' },
                    //{ name:'氧氣機', model:'', img:'', description:'' },
                    { name:'氧氣機', model:'十全小天使', img:'oxygenGenerator5.jpg', description:'' },
                ]
            },
        }
    }

}