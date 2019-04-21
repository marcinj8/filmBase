import React from 'react';

import NavigationPage from './NavigationPage';

const pagesNavigation = props => {
    const pagesNavigation = [];
    let buttonSytle = ['ResponsePageNavigation__buttons']

    const pageLoader = page => {
        addPage(1);
        if(page - 5 > 1) {
            addPage(page - 5, '<<');
        };
        if(page - 3 > 1) {
            addPage(page - 3, '<');
        };
        addPage(page - 1);
        addPage(page);
        addPage(page + 1);
        if(page + 3 < props.numberOfPages) {
            addPage(page + 3, '>');
        };
        if(page + 5 < props.numberOfPages) {
            addPage(page + 5, '>>');
        };
        addPage(props.numberOfPages);
    }

    const addPage = (page, sign = page, changeNo = page) => {
        if(page === props.currentPage){
            buttonSytle = ['ResponsePageNavigation__buttons', 'ResponsePageNavigation__buttons--active'];
        } else {
            buttonSytle = ['ResponsePageNavigation__buttons']
        }

        pagesNavigation.push(
            <NavigationPage 
                key={page}
                clicked={props.onChangePage}
                buttonStyle={buttonSytle.join(' ')}
                page={page}
                changeNo={changeNo}
                sign={sign}/>)
    };

    if(props.numberOfPages < 10) {
        for(let i = 1; i <= props.numberOfPages; i++) {
                addPage(i);
            }
        } else if(props.numberOfPages >= 10) {
            switch (props.currentPage) {
                case 1 : 
                    pageLoader(props.currentPage + 2);
                    break;
                case 2: 
                    pageLoader(props.currentPage + 1);
                    break;
                case props.numberOfPages: 
                    pageLoader(props.currentPage - 2);
                    break;
                case props.numberOfPages - 1: 
                    console.log(props.currentPage)
                    pageLoader(props.currentPage - 1);
                    break;
                default: pageLoader(props.currentPage)
            };
            // if(props.currentPage = 2){
            //     pageLoader(props.currentPage + 1)
            // }  if(props.currentPage <= 1){
            //     pageLoader(props.currentPage + 2)
            // } else if(props.currentPage  >= props.numberOfPages - 3){
            //     pageLoader(props.currentPage - 2)
            // } else {
            //     pageLoader(props.currentPage)
            // }
        };

    return pagesNavigation
}

export default pagesNavigation;