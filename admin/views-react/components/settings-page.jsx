import react from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";


const SettingsPage = () =>
{
  return(
      <>
        <div className="watm-header">
          <Header />
        </div>
      
        <div className="watm-body">
          <div className="watm-sidebar">
            <Sidebar />
          </div>
        
          <div className="watm-content">
            <MainContent />
          </div>
        </div>
      </>
  )
}


export default SettingsPage;