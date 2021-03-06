import React from 'react'
import goal_1 from '../../images/goal-1.png'
import goal_2 from '../../images/goal-2.png'
import goal_3 from '../../images/goal-3.png'
import goal_4 from '../../images/goal-4.png'
import goal_5 from '../../images/goal-5.png'
import goal_6 from '../../images/goal-6.png'
import goal_7 from '../../images/goal-7.png'
import goal_8 from '../../images/goal-8.png'
import goal_9 from '../../images/goal-9.png'
import goal_10 from '../../images/goal-10.png'
import goal_11 from '../../images/goal-11.png'
import goal_12 from '../../images/goal-12.png'
import goal_13 from '../../images/goal-13.png'
import goal_14 from '../../images/goal-14.png'
import goal_15 from '../../images/goal-15.png'
import goal_16 from '../../images/goal-16.png'
import goal_17 from '../../images/goal-17.png'

const Domain = () => {

    const cards = [
        {
            img: goal_1,
            title: 'No Poverty',
            text: 'End poverty in all its forms everywhere.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/1_Why-It-Matters-2020.pdf',
            color: 'rgba(235,28,46,255)',
            examples: [
                {
                    name: 'Donation Match',
                    link: 'https://www.donationmatch.com/'
                },
                {
                    name: 'OKO Finance',
                    link: 'https://www.oko.finance/'
                },
                {
                    name: 'Solar Freeze',
                    link: 'http://www.solarfreeze.co.ke/'
                }
            ]
        },
        {
            img: goal_2,
            title: 'Zero Hunger',
            text: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/2_Why-It-Matters-2020.pdf',
            color: 'rgba(211,160,42,255)',
            examples: [
                {
                    name: 'Indigo Drones',
                    link: 'https://indigodrones.com/'
                },
                {
                    name: 'Skill Lab',
                    link: 'https://skilllab.io/en-us'
                },
                {
                    name: 'Apic',
                    link: 'https://apic.ai/'
                },
            ]
        },
        {
            img: goal_3,
            title: 'Good Health and Well-being',
            text: 'Ensure healthy lives and promote well-being for all at all ages.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2017/03/3_Why-It-Matters-2020.pdf',
            color: 'rgba(39,155,72,255)',
            examples: [
                {
                    name: 'Kindara',
                    link: 'https://www.kindara.com/'
                },
                {
                    name: 'Wonder Tree',
                    link: 'https://wondertree.co/'
                },
                {
                    name: 'mDoc',
                    link: 'https://www.mymdoc.com/'
                },
            ]
        },
        {
            img: goal_4,
            title: 'Quality Education',
            text: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2017/02/4_Why-It-Matters-2020.pdf',
            color: 'rgba(194,31,50,255)',
            examples: [
                {
                    name: 'Donation Match',
                    link: 'https://www.donationmatch.com/'
                },
                {
                    name: 'OKO Finance',
                    link: 'https://www.oko.finance/'
                },
                {
                    name: 'Skill Lab',
                    link: 'https://skilllab.io/en-us'
                },
            ]
        },
        {
            img: goal_5,
            title: 'Gender Equality',
            text: 'Achieve gender equality and empower all women and girls.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/5_Why-It-Matters-2020.pdf',
            color: 'rgba(239,64,43,255)',
            examples: [
                {
                    name: 'Donation Match',
                    link: 'https://www.donationmatch.com/'
                },
                {
                    name: 'Skill Lab',
                    link: 'https://skilllab.io/en-us'
                },
                {
                    name: 'Kindara',
                    link: 'https://www.kindara.com/'
                },
            ]
        },
        {
            img: goal_6,
            title: 'Clean Water and Sanitation',
            text: 'Ensure availability and sustainable management of water and sanitation for all.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/6_Why-It-Matters-2020.pdf',
            color: 'rgba(1,174,217,255)',
            examples: [
                {
                    name: 'Flow',
                    link: 'https://www.youtube.com/watch?v=3Km_tquLuc0&list=PLOU2XLYxmsIK3Mq1itovZMQkKEkBYamG0&index=10'
                }
            ]
        },
        {
            img: goal_7,
            title: 'Affordable and Clean Energy',
            text: 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/7_Why-It-Matters-2020.pdf',
            color: 'rgba(253,184,11,255)',
            examples: []
        },
        {
            img: goal_8,
            title: 'Decent Work and Economic Growth',
            text: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/8_Why-It-Matters-2020.pdf',
            color: 'rgba(143,24,56,255)',
            examples: [
                {
                    name: 'Skill Lab',
                    link: 'https://skilllab.io/en-us'
                },
                {
                    name: 'Donation Match',
                    link: 'https://www.donationmatch.com/'
                }
            ]
        },
        {
            img: goal_9,
            title: 'Industry Innovation and Infrastructure',
            text: 'Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/07/9_Why-It-Matters-2020.pdf',
            color: 'rgba(243,109,37,255)',
            examples: [
                {
                    name: 'Donation Match',
                    link: 'https://www.donationmatch.com/'
                },
                {
                    name: 'OKO Finance',
                    link: 'https://www.oko.finance/'
                },
            ]
        },
        {
            img: goal_10,
            title: 'Reduced Inequalities',
            text: 'Reduce inequality within and among countries.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2018/01/10_Why-It-Matters-2020.pdf',
            color: 'rgba(225,20,132,255)',
            examples: [
                {
                    name: 'Skill Lab',
                    link: 'https://skilllab.io/en-us'
                },
            ]
        },
        {
            img: goal_11,
            title: 'Sustainable Cities and Communities',
            text: 'Make cities and human settlements inclusive, safe, resilient and sustainable.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/07/11_Why-It-Matters-2020.pdf',
            color: 'rgba(249,158,33,255)',
            examples: [
                {
                    name: 'OKO Finance',
                    link: 'https://www.oko.finance/'
                }
            ]
        },
        {
            img: goal_12,
            title: 'Responsible Consumption and Production',
            text: 'Ensure sustainable consumption and production patterns.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/07/12_Why-It-Matters-2020.pdf',
            color: 'rgba(207,141,42,255)',
            examples: []
        },
        {
            img: goal_13,
            title: 'Climate Action',
            text: 'Take urgent action to combat climate change and its impacts.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/07/13_Why-It-Matters-2020.pdf',
            color: 'rgba(72,119,62,255)',
            examples: []
        },
        {
            img: goal_14,
            title: 'Life Below Water',
            text: 'Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/07/14_Why-It-Matters-2020.pdf',
            color: 'rgba(0,125,188,255)',
            examples: []
        },
        {
            img: goal_15,
            title: 'Life On Land',
            text: 'Protect, restore, and promote sustainable use of terrestrial ecosystems, manage forests, combat desertification and biodiversity loss, and halt and reverse land degradation.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/07/15_Why-It-Matters-2020.pdf',
            color: 'rgba(62,176,73,255)',
            examples: []
        },
        {
            img: goal_16,
            title: 'Peace, Justice and Strong Institutions',
            text: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/07/16_Why-It-Matters-2020.pdf',
            color: 'rgba(2,85,139,255)',
            examples: []
        },
        {
            img: goal_17,
            title: 'Partnerships',
            text: 'Strengthen the means of implementation and revitalize the global partnership for sustainable development.',
            link: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/07/17_Why-It-Matters-2020.pdf',
            color: 'rgba(24,54,104,255)',
            examples: []
        }
    ];

    return (
        <div className='container text-center'>
            <h1 className='my-3' style={{ color: "#e85510" }}>Domains</h1>
            <h2 className='my-3' style={{ color: "#e85510" }}>United Nation 17 Sustainable Development Goals</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                        {cards.map((card, index) => {
                            return (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-5" style={{ display: "flex", justifyContent: "center" }} key={card.title}>
                                    <div className="card" style={{ width: "18rem", borderBottom: `10px solid ${card.color}`, borderRadius: "10px" }}>
                                        <img src={card.img} className="card-img-top" alt={`goal-${index + 1}`} />
                                        <div className="card-body">
                                            <h5 className="card-title">{card.title}</h5>
                                            <hr />
                                            <p className="card-text">{card.text}</p>
                                            <hr />
                                            <a href={card.link} className="btn" target="_blank" rel='noreferrer' style={{ backgroundColor: card.color, color: "white" }}>Learn More</a>
                                            <hr />
                                            <h5>Example Projects: </h5>
                                            <div class="list-group">
                                                {
                                                    card.examples.length === 0 ? <p>None listed.<hr /> Consider submitting to this category and making an impact!</p> :
                                                        card.examples.map((example, index) => {
                                                            return (
                                                                <a class="list-group-item list-group-item-action" href={example.link} target="_blank" rel='noreferrer' style={{ color: card.color }}>{example.name}</a>
                                                            )
                                                        })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Domain