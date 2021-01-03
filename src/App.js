import React from 'react';
import List from './composition/List';
import './App.css';


export default function App(props) {
    // console.log(props.store );
    return (
        <main className='App'>
            <header className='App-header'>
                <h1>Trellz</h1>
            </header>
            <div className='App-list'>
                {props.store.lists.map(list => (
                    <List 
                        key={list.id}
                        title={list.header}
                        // combines the cardIds array for the list with the allCards object
                        cards={list.cardIds.map(id => (props.store.allCards[id]))}
                    />
                ))}
            </div>
        </main>
    );
}