let barisMenu = [
  ['Home',
    'Profile',
    'Setting',
    'Logout'
  ]
]
barisMenu.map(navBar => {
  navBar.map(barMenu => {
    console.log(barMenu)
    document.write(`
    <div>
      <nav>
        <ul>
          <a href="/">
            <li>${barMenu}</li>
          </a>
        </ul>
      </nav>
    </div>
    
    `)
  })
})
