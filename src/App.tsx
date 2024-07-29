import React, { useState, useEffect } from "react";
import FadeIn from './components/FadeIn.tsx';
import Main from './components/Main.tsx';
import Navigation from './components/Navigation.tsx';
import Expertise from './components/Expertise.tsx';
import Timeline from './components/Timeline.tsx';
import Project from './components/Project.tsx';
import Contact from './components/Contact.tsx';
import './index.scss';
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
    const [mode, setMode] = useState < 'light' | 'dark' > ('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

            <FadeIn transitionDuration={700}>
                <Main />
                <Expertise />
                <Timeline />
            <ThemeProvider theme={theme}>
                {/* <Project/> */}
                <Contact />
            </ThemeProvider>
            </FadeIn>
            {/* <Footer /> */}
        </div>
    );
}

export default App;