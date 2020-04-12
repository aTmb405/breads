import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../components/ListItem';

let fetchSummary = jest.fn();
let removeSummary = jest.fn();
let postNewSubscription = jest.fn();

function shallowSetup() {
    const props = {
        key: 1,
        id: 1,
        title: 'I like bacon',
        domain: 'www.bacon.com',
        url: 'www.bacon.com/i_like_bacon',
        word_count: 2000,
        user_id: 3,
        username: 'bacnlvr',
        image: 'www.image.com',
        summary: {
            id: 1,
            data: 'this is the summary'
        }
    }

    const enzymeWrapper = shallow(<ListItem {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('Shallow rendered List', () => {
    it('renders without crashing', () => {
        const { enzymeWrapper } = shallowSetup()
        enzymeWrapper;
    });
    it('renders items or cards', () => {
        const { enzymeWrapper, props } = shallowSetup();
        expect(enzymeWrapper.find('h5').text()).toBe(props.title);
        // expect(enzymeWrapper.find('a')) click opens props.url
        expect(enzymeWrapper.find('.lead').text()).toBe(props.domain);
        expect(enzymeWrapper.find('div.reading-area').find('p.text-muted').text()).toBe(`~${Number(props.word_count).toLocaleString()} words`);
        expect(enzymeWrapper.find('img').hasClass('timeline-image')).toBe(true);
        expect(enzymeWrapper.find('img').html()).toContain(props.image); //assert attr src and alt?
        expect(enzymeWrapper.find('p.btn.text-primary.m-2').text()).toBe(props.username);
        //test showing and hiding summary data
        //test a link
        //test subscribe function
        //test user profile link
        //test delete function
    });
});

// 1. What is the output of the component i.e what does it render?
//  - item that displays title, domain, word count, img, username, summary button, correct user
// 2. Does the component render different results based on differing conditions?
//  - view summary button shows summary data
// 3. What does the component do with functions passed to it as props?
//  - fetchSummary, removeSummary, postNewSubscription, removeReading
// 4. What are the outcomes of a user interacting with the component?
//  - user goes to url, deletes reading, displays/removes summary, subscribes, goes to user page
