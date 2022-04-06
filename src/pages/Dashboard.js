import TicketCard from '../components/TicketCard'

const Dashboard = () => {
    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Ania',
            avatar: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1506432993/jc64ylcvqjpjx6ueg9ej.jpg',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Costam costam i blabla blavla',
            timestamp: '2022-02-11T07:36:17+0000'
        },
        {
            category: 'Q1 2022',
            color: 'blue',
            title: 'NFT Safety 102 Video',
            owner: 'Ania',
            avatar: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1506432993/jc64ylcvqjpjx6ueg9ej.jpg',
            status: 'working on it',
            priority: 2,
            progress: 70,
            description: 'Costam costam i blabla blavla',
            timestamp: '2022-02-13T07:36:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'red',
            title: 'Build sth',
            owner: 'Ania',
            avatar: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1506432993/jc64ylcvqjpjx6ueg9ej.jpg',
            status: 'done',
            priority: 3,
            progress: 80,
            description: 'Costam costam i blabla blavla',
            timestamp: '2022-02-18T07:36:17+0000'
        }
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ]

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard
                                    id={_index}
                                    color={filteredTicket.color}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                        <div/>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Dashboard