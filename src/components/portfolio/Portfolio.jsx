import React from 'react'
import './portfolio.css'

const Portfolio = () => {
    return (
        <section id="projects">
            <h5>My recent Work</h5>
            <h2>Projects</h2>
            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <h3>Polling Application</h3>
                    <div className="portfolio_item-image"> This is a web application that allows users to create polls
                        and and vote on them. It was made using django with extensive use of ORM's. Default django
                        templates were used to make the frontend. It is hosted with herokuapp.
                    </div>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/harshhx/Polling-Application" className='btn'
                           target="_blank">Github</a>
                        <a href="https://polling-application-harshhx.herokuapp.com/" className='btn btn-primary'
                           target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <h3>CRM Application</h3>
                    <div className="portfolio_item-image"> This is a web application that allows an organisation to
                        create agents and leads and then respective leads could be assigned to specific agents. This
                        apps comes with proper permissions such that agents and oranisations have different permissions.
                        It was made using django with extensive use of ORM's. Default django templates were used to make
                        the frontend. It is hosted with herokuapp.
                    </div>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/harshhx/Django-CRM" className='btn' target="_blank">Github</a>
                        <a href="https://harshhx-crm.herokuapp.com/" className='btn btn-primary' target="_blank">Live
                            Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <h3>Personal Website</h3>
                    <div className="portfolio_item-image"> This is a website to showcase my profile. It is made on
                        React.js and hosted with help of github pages hosting service.
                    </div>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/harshhx/portfolio" className='btn' target="_blank">Github</a>
                        <a href="https://www.theharshgupta.co.in/" className='btn btn-primary' target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <h3>Work at Adani Digital Labs</h3>
                    <div className="portfolio_item-image">Developed APIs using Nest.js and utilized Prisma ORM for the customer care
executive dashboard's backend.
Implemented TypeScript utilities across all DTOs to optimize the code
Refactored the codebase to enhance performance, improve maintainability
and reduce cognitive complexity</div>
                    <div className="portfolio_item-cta">
                        {/*<a href="https://github.com" className='btn' target="_blank">Github</a>*/}
                        <a href="https://auth.geeksforgeeks.org/user/hg070401/articles" className='btn btn-primary'
                           target="_blank">Link to articles</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <h3>Work at GetWork.org</h3>
                    <div className="portfolio_item-image"> Made and maintained many api's with the help of
                        Django-rest-framework.

                        Worked on a real time chat feature, made with help of fireStore and React.js
                    </div>

                    <div className="portfolio_item-image"> Created a new user flow to have a one click apply feature to
                        enhance user experience. Made both frontend and backend required to achieve the goal.
                    </div>
                    <div className="portfolio_item-cta">

                        <a href="https://getwork.org/" className='btn btn-primary' target="_blank">Link to Getwork</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <h3>Work at geeksforgeeks</h3>
                    <div className="portfolio_item-image">Wrote many articles on Data visualisation and python.</div>
                    <div className="portfolio_item-cta">
                        {/*<a href="https://github.com" className='btn' target="_blank">Github</a>*/}
                        <a href="https://auth.geeksforgeeks.org/user/hg070401/articles" className='btn btn-primary'
                           target="_blank">Link to articles</a>
                    </div>
                </article>
                
            </div>
        </section>
    )
}

export default Portfolio