import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const MainPanelMessageStart = () => {
    return (
        <div onClick={() => {if (document.getElementById('projects') != null) { // @ts-ignore
            document.getElementById('projects').scrollIntoView({behavior: "smooth"})
        }}}>
            <h1>START</h1>
            <h1><ArrowCircleDownIcon fontSize={"large"}/></h1>
        </div>
    )
}

export {MainPanelMessageStart}