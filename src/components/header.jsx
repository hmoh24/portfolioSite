import { AppBar, Button, Container, Toolbar } from "@mui/material"


const Header = () => {

  const buttons = ['Home', 'About', 'Projects', 'Contact']

  return (
    <AppBar position="static">
      <Toolbar>
        {buttons.map((title) =>
          <Button sx={{ color: 'white' }}>
            {title}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
