export const state = () => ({
    internship: 0,
    volunteer: 0,
    pledge: 0,
    mainDialog: false,
    menuList: [
        {
            name: "About SRC",
            link: "/about-us/",
            choice: true,
            target: "",
            options: [
                {
                    name: "Council",
                    subMenu: true,
                    target: "",
                    redirect: "#",
                    subMenuOptions: [

                        {
                            name: "Advisory Board",
                            redirect: "/advisory/",
                        },
                        {
                            name: "Team",
                            redirect: "/team/",
                        },
                    ]

                },
                {
                    name: "Capabilities",
                    link: "/capabilities/",
                    subMenu: true,
                    target: "",

                    subMenuOptions: [
                        // {
                        //     name:"CSR",
                        //     subMenu:false,
                        //     redirect:"/capabilities/csr/",
                        //     target:"",
                        // },
                        {
                            name: "Research",
                            subMenu: false,
                            redirect: "/capabilities/research/",
                            target: "",
                        },
                        {
                            name: "Consulting/Advisory",
                            subMenu: false,
                            redirect: "/capabilities/consulting_and_advisory/",
                            target: "",
                        },
                        {
                            name: "Environment,Social & Governance",
                            subMenu: false,
                            redirect: "/capabilities/esg/",
                            target: "",
                        },
                        {
                            name: "Intellectual Support",
                            subMenu: false,
                            redirect: "/capabilities/intellectual_support/",
                            target: "",
                        },
                        {
                            name: "Media Advocacy",
                            subMenu: false,
                            redirect: "/capabilities/media_advocacy/",
                            target: "",
                        },
                        {
                            name: "Digital Documentation",
                            subMenu: false,
                            redirect: "/capabilities/digital_documentation/",
                            target: "",
                        },

                        {
                            name: "Documentry",
                            subMenu: false,
                            redirect: "/capabilities/documentry/",
                            target: "",
                        },

                    ]

                },
            ]

        },



        // {
        //     name: "Councilaaaa",
        //     link:"/",
        //     choice:true,
        //     target:"",
        //     options:[
        //         {
        //             name:"Advisory Board",
        //             subMenu:false,
        //             redirect:"/advisory/",
        //             target:"",
        //         },
        //         {
        //             name:"Team",
        //             subMenu:false,
        //             redirect:"/team/",
        //             target:""
        //         }
        //   ]

        // },



        // {
        //     name: "Capabilities",
        //     link:"/capabilities/",
        //     target:"",
        //     choice:true,
        //     options:[
        //         // {
        //         //     name:"CSR",
        //         //     subMenu:false,
        //         //     redirect:"/capabilities/csr/",
        //         //     target:"",
        //         // },
        //         {
        //             name:"Research",
        //             subMenu:false,
        //             redirect:"/capabilities/research/",
        //             target:"",
        //         },
        //         {
        //             name:"Consulting/Advisory",
        //             subMenu:false,
        //             redirect:"/capabilities/consulting_and_advisory/",
        //             target:"",
        //         },
        //         {
        //             name:"Environment,Social & Governance",
        //             subMenu:false,
        //             redirect:"/capabilities/esg/",
        //             target:"",
        //         },
        //         {
        //             name:"Intellectual Support",
        //             subMenu:false,
        //             redirect:"/capabilities/intellectual_support/",
        //             target:"",
        //         },
        //         {
        //             name:"Media Advocacy",
        //             subMenu:false,
        //             redirect:"/capabilities/media_advocacy/",
        //             target:"",
        //         },
        //         {
        //             name:"Digital Documentation",
        //             subMenu:false,
        //             redirect:"/capabilities/digital_documentation/",
        //             target:"",
        //         },

        //         {
        //             name:"Documentry",
        //             subMenu:false,
        //             redirect:"/capabilities/documentry/",
        //             target:"",
        //         },

        //   ]

        // },
        {
            name: "CSR",
            link: "",
            choice: true,
            target: "",
            options: [
                {
                    name: "Projects",
                    target: "",
                    redirect: "/csr/projects/",
                },
                {
                    name: "Ventures",
                    redirect: "/ventures/",
                    target: "",
                    choice: false,
                    subMenuOptions: [
                        {
                            name: "Mahindra",
                            redirect: "/pdf/Mahindra_Coffee_Table_Book.pdf",
                            target: "_blank",
                            subMenu: true,

                        },
                        {
                            name: "Ministry Of Agriculture",
                            redirect: "#",
                            subMenu: true,
                            subMenuOptions: [
                                {
                                    name: "Agri Mechanization",
                                    redirect: "/pdf/Agri_Mech.pdf",
                                    target: "_blank"

                                },
                                {
                                    name: "Plant Protection",
                                    redirect: "",
                                    target: "_blank"

                                },
                            ]
                        },
                        {
                            name: "Khadi",
                            target: "_blank",
                            redirect: "/pdf/Khadi_for_Make_in_India.pdf",
                            subMenu: false,
                        },
                        {
                            name: "NDMC",
                            redirect: "/pdf/NDMC.pdf",
                            target: "_blank",
                            subMenu: false,
                        },
                        {
                            name: "RPF",
                            redirect: "/pdf/RPF.pdf",
                            target: "_blank",
                            subMenu: false,
                        },
                        {
                            name: "Lakshdweep",
                            redirect: "/pdf/Lakshdweep.pdf",
                            target: "_blank",
                            subMenu: false,
                        },
                        {
                            name: "Delhi Police",
                            redirect: "/pdf/Delhi_Police.pdf",
                            target: "_blank",
                            subMenu: false,
                        },
                        // {
                        //     name:"Activities",
                        //     redirect:""
                        // },

                    ]
                },
            ]
        },
        // {
        //     name: "Ventures",
        //     link:"/ventures/",
        //     target:"",
        //     choice:false,
        //     options:[
        //         {
        //             name:"Mahindra",
        //             redirect:"https://cdn.srcouncil.in/media/drive/Mahindra_Coffee_Table_Book.pdf",
        //             target:"_blank",
        //             subMenu:false,

        //         },
        //         {
        //             name:"Ministry Of Agriculture",
        //             redirect:"#",
        //             subMenu:true,
        //             subMenuOptions:[
        //               {
        //                   name:"Agri Mechanization",
        //                   redirect:"https://cdn.srcouncil.in/media/drive/Agri_Mech.pdf",
        //                   target:"_blank"

        //               },
        //               {
        //                   name:"Plant Protection",
        //                   redirect:"https://cdn.srcouncil.in/media/drive/Agri_Plant_Protection.pdf",
        //                   target:"_blank"

        //               },
        //             ]
        //         },
        //         {
        //             name:"Khadi",
        //             target:"_blank",
        //             redirect:"https://cdn.srcouncil.in/media/drive/Khadi_for_Make_in_India.pdf",
        //             subMenu:false,
        //         },
        //         {
        //             name:"NDMC",
        //             redirect:"https://cdn.srcouncil.in/media/drive/NDMC.pdf",
        //             target:"_blank",
        //             subMenu:false,
        //         },
        //         {
        //             name:"RPF",
        //             redirect:"https://cdn.srcouncil.in/media/drive/RPF.pdf",
        //             target:"_blank",
        //             subMenu:false,
        //         },
        //         {
        //             name:"Lakshdweep",
        //             redirect:"https://cdn.srcouncil.in/media/drive/Lakshdweep.pdf",
        //             target:"_blank",
        //             subMenu:false,
        //         },
        //         {
        //             name:"Delhi Police",
        //             redirect:"https://cdn.srcouncil.in/media/drive/Delhi_Police.pdf",
        //             target:"_blank",
        //             subMenu:false,
        //         },
        //         // {
        //         //     name:"Activities",
        //         //     redirect:""
        //         // },

        //     ]
        // },
        // {
        //     name: "Environment Audit",
        //     // link: "/",
        //     target: "",
        //     choice: false,
        //     options: [
        //         {
        //             name: "Events",
        //             target: "",
        //             redirect: ""
        //         },
        //         {
        //             name: "Campaigns",
        //             target: "",
        //             redirect: "/events/campaigns/"
        //         },
        //         // {
        //         //     name:"Activities",
        //         //     redirect:""
        //         // },

        //     ]
        // },
        {
            name: "ESF",
            link: "/",
            target: "",
            choice: true,
            options: [
                {
                    name: "Organizational Structure",
                    target: "_blank",
                    redirect: "/pdf/organization-structure.pdf"
                },
                // {
                //     name: "Team",
                //     target: "",
                //     redirect: "#"
                // },
                // {
                //     name: "Members",
                //     target: "",
                //     redirect: "#"
                // },


            ]
        },
        {
            name: "Learning & Development",
            link: "",
            target: "",
            choice: true,
            options: [
                // {
                //     name: "Courses",
                //     subMenu: false,
                //     target: "_blank",
                //     redirect: "https://courses.srcouncil.in/"
                // },
                {
                    name: "Workshops",
                    subMenu: false,
                    target: "",
                    redirect: ""
                },

            ]
        },
        {
            name: "Tenders",
            link: "/tenders",
            choice: true,
            target: "",
            options: [
                {
                    name: "View Tenders",
                    subMenu: false,
                    target: "",
                    redirect: "/tenders"
                },
                // {
                //     name: "Upload Tender",
                //     subMenu: false,
                //     target: "",
                //     redirect: "/tender-upload"
                // },
            ]
        },

        {
            name: "Events",
            link: "",
            target: "",
            choice: true,
            options: [
                // {
                //     name: "Campaigns",
                //     subMenu: false,
                //     target: "",
                //     redirect: "/events/campaigns/"
                // },
                {
                    name: "Upcoming",
                    subMenu: true,
                    target: "",
                    redirect: "#",
                    subMenuOptions: [
                        // {
                        //     name:"SEE Summit 2022",
                        //     target:"",
                        //     redirect:"/SeeSummit2022/",
                        // },
                        {
                            name: "Traffic Mobility",
                            redirect: "#",
                        },
                        {
                            target: "_blank",
                            name: "100 Years of Independence",
                            redirect: "/pdf/100_years_of_independence.pdf",
                        },
                    ]

                },
                {
                    name: "Summit",
                    subMenu: true,
                    target: "",
                    redirect: "#",
                    subMenuOptions: [
                        {
                            name: "SEE Summit 2022",
                            target: "",
                            redirect: "/concept-note/",
                        },
                        {
                            name: "2021",
                            redirect: "/pdf/SRC_SUMMIT_2021.pdf",
                            target: "_blank",
                        },
                        {
                            name: "2020",
                            redirect: '/pdf/SRC_SUMMIT_2020_1.pdf',
                            target: "_blank",
                        },

                    ]
                },
                {
                    name: "Social",
                    subMenu: true,
                    target: "",
                    redirect: "#",
                    subMenuOptions: [
                        {
                            name: "Treedrive",
                            redirect: "#",
                        },

                    ]
                },

            ]
        },
        {
            name: "Memberships",
            link: "/",
            choice: true,
            target: "",
            options: [
                {
                    name: "Voluntary",
                    subMenu: false,
                    target: "",
                    redirect: "/membership/voluntary/"
                },
                {
                    name: "Internships",
                    subMenu: false,
                    target: "",
                    redirect: "/membership/internship/"
                },
                {
                    name: "Pledge",
                    subMenu: false,
                    target: "",
                    redirect: "/pledge"
                },

            ]
        },
        {
            name: "Career",
            link: "",
            choice: false,
            target: ""
        },
        // {
        //     name: "Dashboard",
        //     link: "http://16.16.11.211/",
        //     choice: false,
        // },
        // { name: "Courses", link:"https://courses.srcouncil.in",choice:false, },
        // { name: "Supporters", link:"",choice:false },
        // { name: "Contact", link:"/events",choice:false, }
    ],
    gallery: [
        { src: 'https://i.ibb.co/J7qkJTB/one.jpg' },
        { src: "https://i.ibb.co/jzyywnw/two.jpg" },
        // { src: "https://images.unsplash.com/photo-1612821058477-8b39080e8dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80" }
    ],
    sideSwitch: false,
    homeData: {},
    eventTimeline: [
        {
            year: "2018",
            title: "Traffic 2018",
            description: "NATIONAL SEMINAR ON TRAFFIC MANAGEMENT & TECHNOLOGY"
        },
        {
            year: "2019",
            title: "ABOUT INDIA 2047",
            description: "National Seminar on “India by 2047”, organized by Social Responsibility Council (SRC), March, 2019, New Delhi"
        },
        {
            year: "2019",
            title: "See Summit 2019",
            description: "Sustainability means maintaining inter-generational equity. Sustainability means staying in business forever as it drives profitability. Sustainability means operating towards zero waste society and attaining SUSTAINABLE DEVELOPMENT GOALS. Sustainable Environment & Sustainable Energy are two sides of the same coin. Sustainable Energy means many things:"
        },
        {
            year: "2020",
            title: "See Summit 2020",
            description: "“Renewed Commitment for Smart, Clean & Green India”, the flagship forum is trying to highlight and celebrate the multiple green initiatives of the Government and Corporate Sectors to build a much greener India."
        }
    ],
    eventimelineDetail: [
        {
            query_param: "india-2047",
            title: "India 2047",
            short_description: "National Seminar on “India by 2047”, organized by Social Responsibility Council (SRC), March, 2019, New Delhi",
            description: "AIMS & OBJECTIVES In the most likely scenario, India would become a world leader, not in emerging but among the developed countries.Based on current trends, this national seminar would elucidate on various developments that might have happened when India will be at 100 years oldas an independent nation, a mere less than 32 years away now. The year is 2047 of course when it will be a centenary of celebration of ideals on which India is built.",
            key_points: [
                "India as a World Leader in 2047",
                "Major Achievements of India in General",
                "Main Sectors where India would Lead the World",
                "India as a World Leader in Space Science & Technology",
                "India as the Strongest Soft Power of the World",
                "India as the Leader of Digital World",
                "India as a World Leader in Skill Development and Entrepreneurship",
                "India as a World Leader in Shaping International Relations"
            ],
            partner: [
                {
                    key: "Media Partner",
                    name: "Degree 360 Solutions Pvt Ltd.",
                    link: "https://degree360solutions.com",
                    image: ""
                },
                {
                    key: "Media Partner",
                    name: "Digivaarta India Pvt Ltd.",
                    link: "https://digivaarta.com",
                    image: ""
                },
            ]

        }
    ],
    supportersList: [
        {
            title: "Bankura Precision Agricultural Equipments",
            image: "",
            link: "http://www.bankuralaserlandleveler.co.in/"
        },
        {
            title: "Captain Tractors Pvt. Ltd.",
            image: "",
            link: "http://www.captaintractors.com/"
        },
        {
            title: "Degree 360 Solutions Pvt. Ltd.",
            image: "",
            link: "http://www.degree360solutions.com/"
        },
        {
            title: "Escorts Agri Machinery",
            image: "",
            link: "http://www.escortsgroup.com/"
        },
        {
            title: "Gomadhi Engineering Services",
            image: "",
            link: "http://www.gomadhi.com/"
        },
        {
            title: "Greaves Cotton Limited",
            image: "",
            link: "http://www.greavescotton.com/Main/index.aspx"
        },
        {
            title: "Himachal Tourism",
            image: "",
            link: "http://himachaltourism.gov.in/"
        },
        {
            title: "Howard Farm Implements India Pvt. Ltd.",
            image: "",
            link: "http://www.tech2farms.com/"
        },
        {
            title: "The Institute of Company Secretaries of India",
            image: "",
            link: "http://www.icsi.edu/"
        },
        {
            title: "Jawaharlal Nehru Port Trust",
            image: "",
            link: "http://www.jnport.gov.in/"
        },
        {
            title: "Khadi & Village Industries Commisssiom",
            image: "",
            link: "http://www.kvic.org.in/"
        },
        {
            title: "Lakshadweep Development Corporation Ltd.",
            image: "",
            link: "http://ldcl.gov.in/"
        },
        {
            title: "Maharashtra Tourism",
            image: "",
            link: "https://www.maharashtratourism.gov.in/"
        },
        {
            title: "Mahindra & Mahindra Limited",
            image: "",
            link: "http://rise.mahindra.com/"
        },
        {
            title: "New Delhi Municipal Corporation",
            image: "",
            link: "https://www.ndmc.gov.in/"
        },
        {
            title: "Oriental Insurance Company Limited",
            image: "",
            link: "http://orientalinsurance.org.in/"
        },
        {
            title: "Santhosh Agri Machinery",
            image: "",
            link: ""
        },
        {
            title: "Tafe",
            image: "",
            link: "http://www.tafe.com/"
        },
        {
            title: "Valasumani",
            image: "",
            link: "http://www.valasumani.com/"
        },
        {
            title: "VST Shakti",
            image: "",
            link: "http://www.vsttillers.com/"
        },
        {
            title: "Renaaissance Power Products Pvt. Ltd.",
            image: "",
            link: "http://renppl.com/"
        },
        {
            title: "DDW Enterprises PVT. LTD.",
            image: "",
            link: "http://www.ddwent.com/"
        },
        {
            title: "Bayer",
            image: "",
            link: "http://www.bayer.com/"
        },
        {
            title: "CropLife India",
            image: "",
            link: "http://croplifeindia.org/"
        },
        {
            title: "Crystal Crop Protection",
            image: "",
            link: "http://www.crystalcropprotection.com/"
        },
        {
            title: "Dupont",
            image: "",
            link: "http://www.dupont.co.in/"
        },
        {
            title: "Hindustan Chemicals Company",
            image: "",
            link: ""
        },
        {
            title: "Mahamaya Lifesciences Pvt. Ltd.",
            image: "",
            link: "http://www.mahamayalifesciences.com/"
        },
        {
            title: "Parijat Industries India Pvt. Ltd",
            image: "",
            link: "http://www.parijatagrochemicals.com/"
        },
        {
            title: "Punjab Chemicals",
            image: "",
            link: "https://www.punjabchemicals.com"
        },
        {
            title: "Ralis India Limited",
            image: "",
            link: "http://www.rallis.co.in"
        },
        {
            title: "UPL",
            image: "",
            link: "http://www.uplonline.com"
        },
        {
            title: "Willowood India",
            image: "",
            link: "https://www.willowoodhk.com/wl-india.html"
        },
        {
            title: "Vizien Organics",
            image: "",
            link: ""
        },
        {
            title: "Bheem",
            image: "",
            link: ""
        }
    ],
    appBarColor: "#1D3A7C"
})



export const mutations = {

    SET_SWITCH_SIDE(state) {
        return state.sideSwitch = !state.sideSwitch
    },

    SET_HOME_DATA(state, data) {
        return state.homeData = data
    },
    SET_APPBAR_COLOR(state, color) {
        state.appBarColor = color
    },

    SET_INTERNSHIP_VALUE(state, value) {
        state.internship = value
    },
    SET_VOLUNTEER_VALUE(state, value) {
        state.volunteer = value
    },
    SET_PLEDGE_VALUE(state, value) {
        state.pledge = value
    },
    SET_MAIN_DIALOG(state) {
        state.mainDialog = !state.mainDialog
    }

}


export const getters = {

    GET_MENU_LIST(state) {
        return state.menuList
    },



    GET_GALLERY_LIST(state) {
        return state.gallery
    },


    GET_SIDE_SWITCH(state) {
        return state.sideSwitch
    },

    GET_TIMELINE_LIST(state) {
        return state.eventTimeline
    },

    GET_HOME_DATA(state) {
        return state.homeData
    },

    GET_APPBAR_COLOR(state) {
        return state.appBarColor
    },

    GET_INTERNSHIP_VALUE(state) {
        return state.internship
    },
    GET_VOLUNTEER_VALUE(state) {
        return state.volunteer
    },
    GET_PLEDGE_VALUE(state) {
        return state.pledge
    },
    GET_MAIN_DIALOG(state) {
        return state.mainDialog
    }


}
