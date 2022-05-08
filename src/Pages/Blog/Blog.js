import React from 'react';

const Blog = () => {
    return (
        <div className='container py-5 bg-light'>
            <h2>Blog</h2>
            <div className='bg-success p-4 rounded'>
                <h5>1. Difference between Node.JS and Javascript?</h5>
                <p><b>NodeJS :</b>
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                <p><b>JavaScript :</b>
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
            </div>

            <div className='bg-info p-4 rounded'>
                <h5>2. when should you use node.js and when should you use MongoDB?</h5>
                <p><b>NodeJS :</b>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
                <p><b>MongoDB :</b>NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>
            </div>

            <div className='bg-secondary text-light p-4 rounded'>
                <h5>3. Difference between sql and nosql?</h5>
                <p>When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision. </p>
                <p> <b>Type</b>
                    SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. </p>

                <p><b>The Structure </b>
                    SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. </p>
            </div>

            <div className='bg-dark text-light p-4 rounded'>
                <h5>4. what is the purpose of jwt and how does it work?</h5>
                <p>WT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <p>
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    Once decoded, you will get two JSON strings:
                    The header and the payload.
                    The signature.</p>
            </div>


        </div>
    );
};

export default Blog;