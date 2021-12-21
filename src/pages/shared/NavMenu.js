import React from 'react';
import {Link} from "react-router-dom";
import Dropdown from "../../components/Dropdown";

import Logo from "../../assets/img/Icon.png"
import ProfilePictureTemplate from "../../assets/img/ProfilePicture_Template.png"

export function ToggleOpenDyslexic() {
    document.documentElement.classList.toggle("openDyslexic");
}

export default function NavMenu() {
    return(
        <div className="h-12">
            <div className="fixed flex flex-row h-inherit w-full bg-tertiary z-40"
                 style={{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'}}>
                <Dropdown id="nav"
                          innerHtml={
                              <div slot="InnerHTML" className="flex flex-row flex-wrap content-center m-2">
                                  <svg className="flex-1-2 h-auto" width="8" height="8" viewBox="0 0 17 17" fill="none"
                                       xmlns="http://www.w3.org/2000/svg" style={{padding: '1px'}}>
                                      <path
                                          d="M10.5 0H6C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6L0 10.5C0 12.0913 0.632141 13.6174 1.75736 14.7426C2.88258 15.8679 4.4087 16.5 6 16.5H10.5C12.0913 16.5 13.6174 15.8679 14.7426 14.7426C15.8679 13.6174 16.5 12.0913 16.5 10.5V6C16.5 4.4087 15.8679 2.88258 14.7426 1.75736C13.6174 0.632141 12.0913 0 10.5 0V0ZM13.5 10.5C13.5 11.2957 13.1839 12.0587 12.6213 12.6213C12.0587 13.1839 11.2957 13.5 10.5 13.5H6C5.20435 13.5 4.44129 13.1839 3.87868 12.6213C3.31607 12.0587 3 11.2957 3 10.5V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H10.5C11.2957 3 12.0587 3.31607 12.6213 3.87868C13.1839 4.44129 13.5 5.20435 13.5 6V10.5Z"
                                          fill="white"/>
                                  </svg>
                                  <svg className="flex-1-2 h-auto" width="8" height="8" viewBox="0 0 17 17" fill="none"
                                       xmlns="http://www.w3.org/2000/svg" style={{padding: '1px'}}>
                                      <path
                                          d="M10.5 0H6C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6L0 10.5C0 12.0913 0.632141 13.6174 1.75736 14.7426C2.88258 15.8679 4.4087 16.5 6 16.5H10.5C12.0913 16.5 13.6174 15.8679 14.7426 14.7426C15.8679 13.6174 16.5 12.0913 16.5 10.5V6C16.5 4.4087 15.8679 2.88258 14.7426 1.75736C13.6174 0.632141 12.0913 0 10.5 0V0ZM13.5 10.5C13.5 11.2957 13.1839 12.0587 12.6213 12.6213C12.0587 13.1839 11.2957 13.5 10.5 13.5H6C5.20435 13.5 4.44129 13.1839 3.87868 12.6213C3.31607 12.0587 3 11.2957 3 10.5V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H10.5C11.2957 3 12.0587 3.31607 12.6213 3.87868C13.1839 4.44129 13.5 5.20435 13.5 6V10.5Z"
                                          fill="white"/>
                                  </svg>
                                  <svg className="flex-1-2 h-auto" width="8" height="8" viewBox="0 0 17 17" fill="none"
                                       xmlns="http://www.w3.org/2000/svg" style={{padding: '1px'}}>
                                      <path
                                          d="M10.5 0H6C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6L0 10.5C0 12.0913 0.632141 13.6174 1.75736 14.7426C2.88258 15.8679 4.4087 16.5 6 16.5H10.5C12.0913 16.5 13.6174 15.8679 14.7426 14.7426C15.8679 13.6174 16.5 12.0913 16.5 10.5V6C16.5 4.4087 15.8679 2.88258 14.7426 1.75736C13.6174 0.632141 12.0913 0 10.5 0V0ZM13.5 10.5C13.5 11.2957 13.1839 12.0587 12.6213 12.6213C12.0587 13.1839 11.2957 13.5 10.5 13.5H6C5.20435 13.5 4.44129 13.1839 3.87868 12.6213C3.31607 12.0587 3 11.2957 3 10.5V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H10.5C11.2957 3 12.0587 3.31607 12.6213 3.87868C13.1839 4.44129 13.5 5.20435 13.5 6V10.5Z"
                                          fill="white"/>
                                  </svg>
                                  <svg className="flex-1-2 h-auto" width="8" height="8" viewBox="0 0 17 17" fill="none"
                                       xmlns="http://www.w3.org/2000/svg" style={{padding: '1px'}}>
                                      <path
                                          d="M10.5 0H6C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6L0 10.5C0 12.0913 0.632141 13.6174 1.75736 14.7426C2.88258 15.8679 4.4087 16.5 6 16.5H10.5C12.0913 16.5 13.6174 15.8679 14.7426 14.7426C15.8679 13.6174 16.5 12.0913 16.5 10.5V6C16.5 4.4087 15.8679 2.88258 14.7426 1.75736C13.6174 0.632141 12.0913 0 10.5 0V0ZM13.5 10.5C13.5 11.2957 13.1839 12.0587 12.6213 12.6213C12.0587 13.1839 11.2957 13.5 10.5 13.5H6C5.20435 13.5 4.44129 13.1839 3.87868 12.6213C3.31607 12.0587 3 11.2957 3 10.5V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H10.5C11.2957 3 12.0587 3.31607 12.6213 3.87868C13.1839 4.44129 13.5 5.20435 13.5 6V10.5Z"
                                          fill="white"/>
                                  </svg>
                              </div>
                          }
                          content={
                              <div slot="Content">
                                  <ul className="py-1" aria-labelledby="dropdownLargeButton">
                                      <li>
                                          <Link to={{pathname: "/"}} className="block px-4 py-2 hover:bg-primary">Settings</Link>
                                      </li>
                                  </ul>
                                  <div className="py-1 border-t border-primary">
                                      <Link to={{pathname: "/"}}  className="block px-4 py-2 hover:bg-primary">Sign out</Link>
                                  </div>
                              </div>
                          }/>
                <div className="flex flex-row">
                    <img src={ProfilePictureTemplate} alt="" className="m-auto h-9"/>
                    <p className="m-auto ml-2 text-gray-primary text-xl">Leechy</p>
                </div>
                <Link to={{pathname: '/'}}>
                    <img src={Logo} alt="" className="absolute m-auto top-0 bottom-0 left-0 right-0"/>
                </Link>
                <div className="flex items-center absolute m-auto top-0 bottom-0 right-0" style={{marginRight: '1rem'}}>
                    <a onClick={ToggleOpenDyslexic}
                            className="openDyslexic text-center text-gray-primary text-3xl cursor-pointer">
                        O
                    </a>
                </div>
            </div>
        </div>
    );
}