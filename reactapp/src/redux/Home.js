import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

    const fruitList = useSelector( (state) => state.fruitList );

    return (
        <>
            {null != fruitList && fruitList.length > 0 ?
                <ul>
                    {
                        fruitList.map( (fruit) => {
                            return <li>{fruit}</li>
                        })
                    }
                </ul> : 
                <p>Nothing to Show.....</p>
            }
        </>
    )
}

export default Home