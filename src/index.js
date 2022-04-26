import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import AprovalCard from "./ApprovalCard";
import faker from '@faker-js/faker';

const App = () => {
    return (
        <div className="ui container comments">
            <AprovalCard>Você tem certeza?</AprovalCard>
            <AprovalCard>
                <CommentDetail
                    author="Sam"
                    date={faker.date.month()}
                    avatar={faker.image.avatar()} />
            </AprovalCard>
            <AprovalCard>
                <CommentDetail
                    author="Jane"
                    date={faker.date.month()}
                    avatar={faker.image.avatar()} />
            </AprovalCard>
            <AprovalCard>
                <CommentDetail
                    author="Alex"
                    date={faker.date.month()}
                    avatar={faker.image.avatar()} />
            </AprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));