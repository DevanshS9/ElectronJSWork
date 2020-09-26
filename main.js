console.log("Main process working")

//add module and submodules
const electron=require("electron");
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;
//build in module 
const path=require("path");
const url=require("url");

//reference to window
let win;
function creatWindow(){
    //electron call the api for building the window
    
    win=new BrowserWindow(
        {
            webPreferences:{
                nodeIntegration:true,
            }
        }
    );
    //html file load to browser window
    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    }));

    win.webContents.openDevTools();

    win.on('closed',()=>{
        win=null;
    })
}
    //when application has beem finished then call creatwindow()
    app.on('ready',creatWindow);
    app.allowRendererProcessReuse=true;

    //force to quite
    app.on('window-all-closed',()=>{
        if(process.platform!=='darwin'){
            app.quit()
        }
    })
    //when user click on doc  then browser window open
    app.on('activate',()=>{
        if(win === null){
            creatWindow()
        }
    })
