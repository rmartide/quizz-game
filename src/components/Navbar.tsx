import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { LibraryMusic } from '@material-ui/icons';

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <LibraryMusic />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Test your knowledge
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
