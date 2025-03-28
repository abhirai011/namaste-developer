// const heading = React.createElement('h1', { id: "heading" }, "Hello World from React!");


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

//
const parent = React.createElement('div',
  { id: "parent" }, [React.createElement('div', { id: 'child' },
    [React.createElement('h1', { id: 'heading' }, 'I am an h1 tag'),
    React.createElement('h2', { id: 'subheading' }, 'I am an h2 tag')
    ]
  ), React.createElement('div', { id: 'child2' },
    [React.createElement('h1', { id: 'heading' }, 'I am an h1 tag'),
    React.createElement('h2', { id: 'subheading' }, 'I am an h2 tag')
    ]
  )
]
)
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);