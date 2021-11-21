import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hunter x Hunter']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories={ setCategories }
                categories={ categories }
            />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                            />
                        ))
                }
            </ol>
        </>
    );
}

