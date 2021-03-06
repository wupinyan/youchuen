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
                    { name:'便盆椅', model:'富士康 FZK-4301', img:'commodechair1.jpg', description:'有輪子，可推移。' },
                    { name:'便盆椅', model:'富士康 FZK-4542', img:'commodechair2.jpg', description:'有輪子，可推移，可收合。' },
                    { name:'高背便盆椅', model:'富士康 FZK-4351', img:'commodechair3.png', description:'有輪子，可推移，椅背可仰躺至45度角。' },
                    { name:'便盆椅', model:'富士康 FZK-4527', img:'commodechair4.jpg', description:'可收合。' },//
                    { name:'便盆椅', model:'均佳 103', img:'commodechair5.webp', description:'可收合。' },
                    { name:'便盆椅', model:'杏華 BM1', img:'commodechair6.jpg', description:'' }, 
                ]
            },
            singleCrutch:{
                name: '單支拐杖',
                commodity:[
                    { name:'單支拐杖', model:'杏華 7501', img:'single-crutch1.png', description:'可調整拐杖長短。' },
                    { name:'單支拐杖', model:'杏華 7533', img:'single-crutch2.png', description:'可調整拐杖長短，可摺疊收合。' },
                    { name:'單支拐杖', model:'富士康 FZK-2204', img:'single-crutch3.png', description:'可調整拐杖長短，有四爪腳墊，可站立。' },
                    { name:'單支拐杖', model:'富士康 FZK-2205', img:'single-crutch4.jpg', description:'可調整拐杖長短，有四爪腳墊，可站立。' },
                ]
            },
            fourleggedCrutch:{
                name: '四腳拐',
                commodity:[
                    { name:'四腳拐', model:'富士康 FZK-2053', img:'fourlegged-crutch1.jpg', description:'可調整拐杖長短。' },
                    { name:'四腳拐', model:'富士康 FZK-2058', img:'fourlegged-crutch2.png', description:'可調整拐杖長短。' },
                    { name:'四腳拐', model:'富士康 FZK-2036', img:'fourlegged-crutch3.jpg', description:'可調整拐杖長短。' },//
                    { name:'四腳拐', model:'富士康 FZK-2037', img:'fourlegged-crutch4.png', description:'可調整拐杖長短。' },
                    { name:'四腳拐', model:'富士康 FZK-2051', img:'fourlegged-crutch5.png', description:'可調整拐杖長短。' },
                ]
            },
            walker:{
                name: '助行器',
                commodity:[
                    { name:'助行器', model:'富士康 FZK-3428', img:'walker1.jpg', description:'可收合。' },
                    { name:'助行器', model:'富士康 FZK-3133', img:'walker2.png', description:'可收合。' },
                    { name:'助行器', model:'富士康 FZK-833', img:'walker3.png', description:'可收合，有輪子，手把處可調高低，手把處有剎車。' },
                    { name:'助行器剎車', model:'富士康 FZK-KW003', img:'walker4.jpg', description:'彈簧煞。' },//
                    { name:'助行器輔助輪', model:'富士康 FZK-KW004', img:'walker5.jpg', description:'' },//
                ]
            },
            bathchair:{
                name: '沐浴椅',
                commodity:[
                    { name:'沐浴椅', model:'富士康 FZK-0010', img:'bathchair1.png', description:'可調整高低。' },
                    { name:'沐浴椅', model:'富士康 FZK-0013', img:'bathchair2.jpg', description:'可調整高低，椅背可拆除。' },//
                    { name:'沐浴椅', model:'富士康 FZK-0015', img:'bathchair3.png', description:'可調整高低，椅背、扶手皆可拆除。' },
                    { name:'沐浴椅', model:'富士康 FZK-188', img:'bathchair4.jpg', description:'可調整高低，可收合。' },
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
                    { name:'輪椅坐墊', model:'宏達益 GEL-SEAT-027', img:'wheelchair-cushion3.png', description:'' },
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
                    { name:'移位腰帶', model:'杰奇 JM-230', img:'shift1.png', description:'' },
                    { name:'移位板', model:'天群 EZ-510', img:'shift2.jpg', description:'' },
                    { name:'移位滑墊', model:'天群 EZ-110', img:'shift3.jpeg', description:'' },
                    { name:'移位機', model:'展群 KD-330', img:'shift4.png', description:'可收合。' },
                ]
            },
            mobilityScooter:{
                name: '代步車',
                commodity:[
                    { name:'電動代步車', model:'必翔 TE-889SL', img:'mobility-scooter1.png', description:'座椅可調高低，扶手可掀，有車燈。' },//
                    { name:'電動代步車', model:'建迪 HS-745', img:'mobility-scooter2.png', description:'座椅可調高低，扶手可掀，有車燈。' },
                    { name:'電動代步車', model:'建迪 HS-580', img:'mobility-scooter3.png', description:'座椅可調高低，扶手可掀，有車燈。' },
                ]
            },
            electricWheelchair:{
                name: '電動輪椅',
                commodity:[
                    { name:'電動輪椅', model:'康揚 霹靂馬標準椅', img:'electric-wheelchair1.png', description:'椅背可調角度，扶手可掀，腿部可抬起。' },
                    { name:'電動輪椅', model:'康揚 霹靂馬沙發椅', img:'electric-wheelchair2.png', description:'椅背可調角度，扶手可掀，腿部可抬起。' },
                    { name:'電動輪椅', model:'必翔 888WNLL', img:'electric-wheelchair3.png', description:'椅背可調角度，扶手可掀。' },
                ]
            },
            oxygenGenerator:{
                name: '氧氣機',
                commodity:[
                    { name:'氧氣機', model:'飛利浦', img:'oxygen-generator1.jpeg', description:'' },
                    { name:'氧氣機', model:'亞適', img:'oxygen-generator2.png', description:'' },
                    { name:'氧氣機', model:'十全小天使', img:'oxygen-generator5.jpg', description:'' },
                ]
            },
            glucoseMeter:{
                name: '血糖機',
                commodity:[
                    { name:'血糖機', model:'福爾 FORA GD40', img:'glucose-meter1.png', description:'' },
                    { name:'血糖機', model:'富廣 樂康', img:'glucose-meter2.webp', description:'' },//
                ]
            },
            suctionPump:{
                name: '抽痰機',
                commodity:[
                    { name:'抽痰機', model:'雃博 TC-2000V', img:'suction-pump1.jpg', description:'' },
                    { name:'抽痰機', model:'御群', img:'', description:'' },//
                ]
            },
            nebulizer:{
                name: '噴霧器',
                commodity:[
                    { name:'噴霧治療器', model:'雃博 AP-100100', img:'nebulizer1.jpg', description:'' },
                    { name:'噴霧治療器', model:'雃博 山普3042', img:'nebulizer2.jpg', description:'' },
                    { name:'攜帶式噴霧器', model:'雃博 PY001', img:'nebulizer3.jpg', description:'' },
                ]
            },
            bloodPressureMonitor:{
                name: '血壓計',
                commodity:[
                    { name:'手腕式血壓計', model:'優盛 S150', img:'blood-pressure-monitor1.webp', description:'' },
                    { name:'手腕式血壓計', model:'優盛 BQ705', img:'blood-pressure-monitor2.webp', description:'' },
                    { name:'手腕式血壓計', model:'歐姆龍 HEM-6232T', img:'blood-pressure-monitor6.jpg', description:'' },
                    { name:'手腕式血壓計', model:'歐姆龍 HEM-6161', img:'blood-pressure-monitor7.jpg', description:'' },
                    { name:'手腕式血壓計', model:'NISSEI WSK-1011J', img:'blood-pressure-monitor9.jpg', description:'' },
                    { name:'手臂式血壓計', model:'歐姆龍 JPN616T', img:'blood-pressure-monitor3.png', description:'' },
                    { name:'手臂式血壓計', model:'歐姆龍 HEM-7121', img:'blood-pressure-monitor8.jpg', description:'' },
                    { name:'手臂式血壓計', model:'NISSEI DSK-1011J', img:'blood-pressure-monitor10.jpg', description:'' },
                    { name:'手臂式血壓計', model:'NISSEI DS-G10J', img:'blood-pressure-monitor11.jpg', description:'' },
                    { name:'隧道式血壓計', model:'歐姆龍 健太郎HBP-9020', img:'blood-pressure-monitor4.jpg', description:'' },
                    { name:'隧道式血壓計', model:'歐姆龍 HEM-1000', img:'blood-pressure-monitor5.jpg', description:'' },
                ]
            },
            heatingPad:{
                name: '熱敷',
                commodity:[
                    { name:'熱敷墊', model:'鼎力 S766D', img:'heating-pad1.png', description:'' },
                    { name:'熱敷墊', model:'雃博 14', img:'heating-pad2.png', description:'' },
                    { name:'熱敷墊', model:'愛民 OO-056', img:'heating-pad3.jpg', description:'' },
                    { name:'電毯', model:'太陽牌', img:'heating-pad5.png', description:'' },
                    { name:'紅外線燈', model:'明宏 MH-270', img:'heating-pad6.jpg', description:'' },
                ]
            },
            electrizer:{
                name: '電療機',
                commodity:[
                    { name:'電療機', model:'雃博 GM350PP', img:'electrizer1.png', description:'低週波。' },
                    { name:'電療機', model:'十全 HL-Y100', img:'electrizer2.jpg', description:'低週波。' },
                    { name:'電療機', model:'歐姆龍 HV-F128', img:'electrizer3.png', description:'低週波。' },
                ]
            },
            thermometer:{
                name: '體溫計',
                commodity:[
                    { name:'額溫槍', model:'福爾 IR42', img:'thermometer1.jpg', description:'' },
                    { name:'耳溫槍', model:'福爾 IR18', img:'thermometer2.jpg', description:'' },
                    { name:'耳溫槍', model:'優盛 RA600 Q', img:'thermometer3.webp', description:'' },
                    { name:'額溫槍', model:'優盛 HA500 Q', img:'thermometer4.webp', description:'' },
                    { name:'額溫槍', model:'紅豆杉 5577', img:'thermometer5.jpg', description:'' },
                    { name:'額溫槍', model:'NISSEI MT-30CPLB', img:'thermometer6.jpg', description:'' },
                ]
            },
            oximeter:{
                name: '血氧機',
                commodity:[
                    { name:'血氧機', model:'優盛 SB100', img:'oximeter1.webp', description:'' },
                    { name:'血氧機', model:'十全 UP-505', img:'oximeter2.jpg', description:'' },
                    { name:'血氧機', model:'眾里 AE-XX', img:'oximeter3.jpg', description:'' },
                ]
            },
            none:{
                name: '',
                commodity:[
                ]
            },

        }
    }

}