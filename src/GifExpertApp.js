import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ value='futbol' }) => {

    // const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState([ 'One Punch']);

    // const handleAdd = (categorie) => {
    //     //setCategories([...categories, "CategoriaNueva"]);
    //     setCategories(categories => [...categories, "CategoriaNueva"]);
    // };

    return ( 
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                { 
                    categories.map( category => 
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    )
                }
            </ol>
        </Fragment>
    );

};

GifExpertApp.propTypes = {
    value: PropTypes.string.isRequired
};

export default GifExpertApp;