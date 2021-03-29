import React, {useState} from 'react'
import './components/stylesheet/Banner.css'
import apple1 from './apple1.jpg'
import playstore from './playstore.jpg'
import Wrapper1 from './components/Wrapper1';
import Wrapper2 from './components/Wrapper2';
function Banner() {
    const[activeTab, setActiveTab] = useState(1);
    const _setTab = (number) => {
        setActiveTab(number);
    };
        return (
        <div className="banner">
        <div className="banner1">
        <div className="banner-bg">
            <p className="wrapper-content">Hairdresser & Beauty<br/>
                simply more beautiful<br/>
                book</p>
        <div className="banner-bg-head">
        <ul className="wrap-head">
        <li id="wrapper1" onClick={() => _setTab(1)}>
                <img id="bg1" alt="img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6Ii8+PGNpcmNsZSBjeD0iNSIgY3k9IjEzIiByPSIyIiBzdHJva2U9IiNmZjVjMzkiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjExIiBjeT0iMTkiIHI9IjIiIHN0cm9rZT0iI2ZmNWMzOSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggc3Ryb2tlPSIjZmY1YzM5IiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik01IDE1YzIgMCA2LTIgNi0ybDEwLTVtLTEwIDVsNS0xMCIvPjwvZz48L3N2Zz4="/>
                <p id="head-bg1">Treatment</p>
        </li>
        <li id="wrapper2" onClick={() => _setTab(2)}>
            <img id="bg2" alt="img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggc3Ryb2tlPSIjNGQ0ZDRkIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xOSAxNHY2YTEgMSAwIDAxLTEgMUg2YTEgMSAwIDAxLTEtMXYtOSIvPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjYiIHg9IjkiIHk9IjE1IiBzdHJva2U9IiM0ZDRkNGQiIHN0cm9rZS13aWR0aD0iMiIgcng9Ii41Ii8+PHBhdGggc3Ryb2tlPSIjNGQ0ZDRkIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yMC45MDMgOC40MTdjLjA2My4xODQuMDk3LjM4LjA5Ny41ODMgMCAxLjEwNS0xLjAwNyAyLTIuMjUgMmEyLjM3NCAyLjM3NCAwIDAxLTEuNjg4LS42NzcgMi4zNzQgMi4zNzQgMCAwMS0xLjY4Ny42NzcgMi4zNzQgMi4zNzQgMCAwMS0xLjY4OC0uNjc3QTIuMzc0IDIuMzc0IDAgMDExMiAxMWEyLjM3NCAyLjM3NCAwIDAxLTEuNjg4LS42NzdBMi4zNzQgMi4zNzQgMCAwMTguNjI2IDExYTIuMzc0IDIuMzc0IDAgMDEtMS42ODgtLjY3N0EyLjM3NCAyLjM3NCAwIDAxNS4yNSAxMUM0LjAwNyAxMSAzIDEwLjEwNSAzIDljMC0uMjAzLjAzNC0uMzk5LjA5Ny0uNTgzbC43MzgtNC40MjZDMy45MjYgMy40NDQgNC40NDUgMyA1IDNoMTMuOTk4Yy41NTMgMCAxLjA3Ni40NTEgMS4xNjYuOTlsLjczOCA0LjQyN3oiLz48L2c+PC9zdmc+"/>
            <p id="head-bg2">Salonname</p>
        </li>
      
    </ul>
    {activeTab === 1 ?
    <Wrapper1 /> :
    <Wrapper2 /> }
            <div className="head-bg-button">
                <button className="bg-button">Find it on Treatwell</button>
            </div>
            </div>
            </div>
            </div>
            <div className="banner2">
            <h2 id="book">Simply book better</h2>
            <div>
            <div className="offer1">
            <div className="div1">
               <img alt="img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OSIgaGVpZ2h0PSI4MiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZCNTAwIiBkPSJNNDAuMDI1IDMuNjcycy0xMS40OSA0OC44NzIgMy42ODYgNzUuNjg2YzAgMC05LjU1Mi02LjE2OS0xOS4zOS0xMi42NTItNS45NTktMy45MjctMTIuMzgyLTcuNjUtMTUuODItMTEuMS0yLjcxLTIuNzE4LTEuMTY2LTQuOTI4LS40MzUtNi4xNjJDMTEuMjU1IDQ0LjA2IDQwLjAyNSAzLjY3MiA0MC4wMjUgMy42NzIiLz48cGF0aCBzdHJva2U9IiMwMDFFNjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMS41MTQiIGQ9Ik00NS4wMSA4MC42MDFMOC41IDU1LjYwN3MtMy42NTEtMi41MjgtLjg0Mi02LjQ1OWM1LjQ4NC03LjY3OSAyMi4xODYtMzEuNzM1IDIyLjE4Ni0zMS43MzVNNy43MzcgMjkuMjU4QzEuMDQyIDI0LjM1Ni0xNS45MjgtLjAxIDU2LjI0MyAxMi42MzhtNy40MjMtMi42NjRhNi4wNCA2LjA0IDAgMDEtMi4yMjcgMTEuNjUxIDYuMDM4IDYuMDM4IDAgMDEtNi4wMzktNi4wMzhjMC0xLjA3My4xNi0xLjg1NC42NTEtMi43MjgiLz48cGF0aCBzdHJva2U9IiMwMDFFNjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMS41MTQiIGQ9Ik01MS4zOTcgNzEuOTc0TDgyLjA4IDI5LjQ4OSA3MS40MDcgMS40MDVINDEuOTJsLTYuNjI0IDcuOTIiLz48cGF0aCBmaWxsPSIjRkY1QzM5IiBkPSJNNTQuMjE4IDUzLjE4M2MtMS4xODQtLjg4LS41Ni0yLjQwMS45MTUtMi40MDFoOS42ODljLjY2NCAwIDEuMjUyLS43ODkgMS40NTctMS40MmwyLjk2Ny05LjMxMmMuNDYtMS40MTMgMi40NTYtMS41MDMgMi45MTYtLjA5bDIuNjU0IDguMTIzYy0uODc1IDIuMzA0LTIuMTg4IDQuNzA4LTQuMTEyIDcuMjE2LTMuMjA4IDQuMTgtMy44NDIgOC4zMTEtMy4xMzkgMTIuMDlsLTUuNTU0IDQuMDA1Yy0xLjIuODY3LTIuODEtLjMwNi0yLjM1NS0xLjcxNmwyLjk5Ni05LjI4OGMuMi0uNjI0LS4wMTktMS4xMjgtLjU0NS0xLjUybC03Ljg4OS01LjY4N3oiLz48cGF0aCBzdHJva2U9IiMwMDFFNjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41MTQiIGQ9Ik03MS43OTcgMzkuODdMNzQuNzY1IDQ5Yy4yMDQuNjMxLjc5MyAxLjA2IDEuNDU3IDEuMDZoOS42ODljMS40NzYgMCAyLjA5OSAxLjg4MS45MTQgMi43NjJsLTcuODg4IDUuODY2YTEuNTMyIDEuNTMyIDAgMDAtLjU0NCAxLjcwMmwyLjk5NSA5LjI4NmMuNDU0IDEuNDA5LTEuMTU2IDIuNTgtMi4zNTUgMS43MTJsLTcuNzkyLTUuNjI2YTEuNTMzIDEuNTMzIDAgMDAtMS44LjAwNGwtNy43OSA1LjY3NmMtMS4xOTguODczLTIuODE1LS4yOTQtMi4zNjItMS43MDdsMy05LjM2YTEuNTM1IDEuNTM1IDAgMDAtLjU0Ni0xLjY5OGwtNy44ODMtNS44NTRjLTEuMTg2LS44OC0uNTYyLTIuNzYzLjkxNC0yLjc2M2g5LjY4NGMuNjYzIDAgMS4yNTItLjQyOSAxLjQ1Ny0xLjA2bDIuOTY3LTkuMTNjLjQ1OS0xLjQxMyAyLjQ1Ny0xLjQxMyAyLjkxNSAweiIvPjwvZz48L3N2Zz4="/>
               <h3 className="banner2-content">Smart offers</h3> 
               <p className="banner2-content-sub">Book last minute or during off-peak times</p>
            </div>
            </div>
            <div className="offer2">
                <div className="div2">
                <img alt="img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OSIgaGVpZ2h0PSI5MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkY1QzM5IiBkPSJNNDcuMTU1IDIxLjc5NmE3Ljg3NiA3Ljg3NiAwIDAwLTYuMzM3IDMuMTkxYy4yNi0uMDMxLjUyMi0uMDUxLjc4OS0uMDUxIDIuMTUyIDAgNC4wNiAxLjAzIDUuMjcyIDIuNjE4YTIuMTUyIDIuMTUyIDAgMDExLjM2IDMuOTg5bC4wMDIuMDI3YzAgMi4wNzItMi4xMTkgNS4zNjUtMy45NjIgNy44NC4zMTQuNDE0LjYxOC44MDYuOTA0IDEuMTY4YTIuNTEzIDIuNTEzIDAgMDAzLjk0NCAwYzIuMzM3LTIuOTUzIDUuOTE3LTcuOTU2IDUuOTE3LTEwLjg5MWE3Ljg5IDcuODkgMCAwMC03Ljg4OS03Ljg5MSIvPjxwYXRoIHN0cm9rZT0iIzAwMUU2MiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjQ5NiIgZD0iTTU0LjYwNiAyOS44NTJjMCAzLjAyNC0zLjY5IDguMTc4LTYuMDk2IDExLjIyYTIuNTkgMi41OSAwIDAxLTQuMDYyIDBjLTIuNDA3LTMuMDQyLTYuMDk2LTguMTk2LTYuMDk2LTExLjIyYTguMTI4IDguMTI4IDAgMTExNi4yNTQgMHoiLz48cGF0aCBzdHJva2U9IiMwMDFFNjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS40OTYiIGQ9Ik00OC42OTUgMjkuODUyYTIuMjE2IDIuMjE2IDAgMTEtNC40MzIgMCAyLjIxNiAyLjIxNiAwIDAxNC40MzIgMHoiLz48cGF0aCBmaWxsPSIjRkZCNTAwIiBkPSJNNzAuODYgMzEuNzljLTUuNDMgMC0xMC4yNDUgMi42MjMtMTMuMjUxIDYuNjcuNTQyLS4wNjQgMS4wOS0uMTA2IDEuNjQ5LS4xMDYgNC41IDAgOC40OSAyLjE1MyAxMS4wMjQgNS40NzYuMTktLjAyNC4zODEtLjA0MS41NzctLjA0MWE0LjUgNC41IDAgMDE0LjUgNC41YzAgMS42NTctLjg5OCAzLjEtMi4yMzEgMy44ODEgMCAuMDIuMDAzLjA0LjAwMy4wNTkgMCA0LjMzMi00LjQzMiAxMS4yMTgtOC4yODcgMTYuMzkuNjU3Ljg2OSAxLjI5NSAxLjY5IDEuODkyIDIuNDQ1IDIuMTA3IDIuNjYxIDYuMTQgMi42NjEgOC4yNDcgMCA0Ljg4Ni02LjE3NSAxMi4zNzQtMTYuNjM2IDEyLjM3NC0yMi43NzUgMC05LjExMi03LjM4Ni0xNi41LTE2LjQ5OC0xNi41Ii8+PHBhdGggc3Ryb2tlPSIjMDAxRTYyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNDk2IiBkPSJNODcuMzU3IDQ4LjI4OWMwIDYuMTM4LTcuNDg4IDE2LjYwMS0xMi4zNzUgMjIuNzc0LTIuMTA2IDIuNjYyLTYuMTM5IDIuNjYyLTguMjQ2IDBDNjEuODUgNjQuODkgNTQuMzYyIDU0LjQyNyA1NC4zNjIgNDguMjljMC05LjExMyA3LjM4Ni0xNi41IDE2LjQ5OC0xNi41IDkuMTEgMCAxNi40OTcgNy4zODcgMTYuNDk3IDE2LjV6Ii8+PHBhdGggc3Ryb2tlPSIjMDAxRTYyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNDk2IiBkPSJNODcuMzU3IDQ4LjI4OWMwIDYuMTM4LTcuNDg4IDE2LjYwMS0xMi4zNzUgMjIuNzc0LTIuMTA2IDIuNjYyLTYuMTM5IDIuNjYyLTguMjQ2IDBDNjEuODUgNjQuODkgNTQuMzYyIDU0LjQyNyA1NC4zNjIgNDguMjljMC05LjExMyA3LjM4Ni0xNi41IDE2LjQ5OC0xNi41IDkuMTEgMCAxNi40OTcgNy4zODcgMTYuNDk3IDE2LjV6Ii8+PHBhdGggc3Ryb2tlPSIjMDAxRTYyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNDk2IiBkPSJNNzUuMzU5IDQ4LjI4OWE0LjUgNC41IDAgMTEtOSAwIDQuNSA0LjUgMCAwMTkgMHoiLz48cGF0aCBzdHJva2U9IiMwMDFFNjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS40OTYiIGQ9Ik02Ni4yNTQgMzIuMzE4YzEuMTYxLTYuNDgtLjY4MS0xMy40MDYtNS40OC0xOC40NDYtOC4zOC04LjgwMi0yMi4zOTItOC44MDItMzAuNzcyIDAtNy41MzkgNy45Mi03Ljc4NSAyMC40OTQtLjUzOCAyOC42ODIuMTk4LjIyNC40LjQ0My42MDYuNjU3IDIuMTkzIDIuMjgzIDIuMjI1IDUuODcxLS4wMjMgOC4xMDFMOS42MTggNzEuNTgyYTUuMDUgNS4wNSAwIDAxLTcuMTQtNy4xNDFsMTkuODQ0LTE5Ljg0Ni4xODctLjEzMWMtNy44MDYtMTEuMi02LjM4LTI2Ljg4NCA0LjI4Mi0zNi40NDUgMTAuMjY5LTkuMjA3IDI2LjAwNC05LjM4IDM2LjQ1NS0uMzggMTIuMzQ1IDEwLjYzIDEyLjg2NSAyOS4yODUgMS41NiA0MC41OTItOC4yNzUgOC4yNzYtMjAuNDg3IDEwLjIxNi0zMC42MDcgNS44Mm0zLjQ4Ni01Ljc1MWEyMS4yOTYgMjEuMjk2IDAgMDAxNi40NzgtLjQ1MW0uODc3IDI0Ljg3MWMuMTU0IDMuODEyLTQuMjMyIDEwLjQ5NS03LjExIDE0LjQ1YTMuMjY2IDMuMjY2IDAgMDEtNS4xMi4yMDdjLTMuMTg4LTMuNzEtOC4xLTEwLjAxNy04LjI1My0xMy44My0uMjMtNS42NTYgNC4xNy0xMC40MjcgOS44MjctMTAuNjU2IDUuNjU2LS4yMjkgMTAuNDI3IDQuMTcyIDEwLjY1NiA5LjgzeiIvPjxwYXRoIHN0cm9rZT0iIzAwMUU2MiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjQ5NiIgZD0iTTQ3LjU5MiA3My4wMjFhMi43OTYgMi43OTYgMCAxMS01LjU4Ni4yMjcgMi43OTYgMi43OTYgMCAwMTUuNTg2LS4yMjd6Ii8+PC9nPjwvc3ZnPg=="/>
                <h3 className="banner2-content">Large selection of top-rated salons</h3>
                <p className="banner2-content-sub">Thousands of New Salons (and Reviews)</p>
                </div>
            </div>
            <div className="offer3">
                <div className="div3">
                    <img alt="img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI4NyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZCNTAwIiBkPSJNMjUuODMgNjQuMzg2Yy0xLjczOC00LjgzMy42MTItMTAuMDU4IDIuNTI0LTE0LjgyNSAxLjkxMi00Ljc2NyAzLjI2NS0xMC42NzMuMDI4LTE0LjY2LTIuNzQ2LTMuMzgzLTcuNzE3LTMuOTUtMTEuMTM0LTYuNjUxLTQuMTAzLTMuMjQ0LTQuNzg2LTkuNjU0LTIuMjUxLTE0LjA5NkM2LjQ1MiAxOS43MjkuODAyIDI5LjM3MS44MDIgNDAuMzM0YzAgMTcuMDIgMTMuNjE0IDMwLjg2IDMwLjU0OCAzMS4yMjgtMi4yMDMtMi4xODMtNC40ODgtNC4zMDgtNS41Mi03LjE3NiIvPjxwYXRoIHN0cm9rZT0iIzAwMUU2MiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjYwNCIgZD0iTTYzLjI3NyA0MC4zMzRjMCAxNy4yNTItMTMuOTg1IDMxLjIzNy0zMS4yMzcgMzEuMjM3Uy44MDIgNTcuNTg2LjgwMiA0MC4zMzQgMTQuNzg4IDkuMDk3IDMyLjA0IDkuMDk3czMxLjIzNyAxMy45ODUgMzEuMjM3IDMxLjIzN3oiLz48cGF0aCBmaWxsPSIjRkY1QzM5IiBkPSJNNDIuMjk1IDM5Ljc4OGgtOS4zNzNWMjMuNDYzYzAtMS4yMDktLjkzMy0yLjI2NC0yLjE0Mi0yLjNhMi4yMDggMi4yMDggMCAwMC0yLjI3NiAyLjIwN3YxNi40MThoLS4wNjJhNC40OCA0LjQ4IDAgMDA0LjQ4IDQuNDE3aDkuNDY2YTIuMjA4IDIuMjA4IDAgMDAyLjIwNy0yLjI3NmMtLjAzNi0xLjIwOS0xLjA5LTIuMTQtMi4zLTIuMTQiLz48cGF0aCBzdHJva2U9IiMwMDFFNjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS42MDQiIGQ9Ik00Mi4yOTUgMzkuNzg4aC05LjM3M1YyMy40NjNjMC0xLjIwOS0uOTMzLTIuMjY0LTIuMTQyLTIuM2EyLjIwOCAyLjIwOCAwIDAwLTIuMjc2IDIuMjA3djE2LjQxOGgtLjA2MmE0LjQ4IDQuNDggMCAwMDQuNDggNC40MTdoOS40NjZhMi4yMDggMi4yMDggMCAwMDIuMjA3LTIuMjc2Yy0uMDM2LTEuMjA5LTEuMDktMi4xNC0yLjMtMi4xNHptMTQuMTAzIDM0LjA3OGwuNTkyLTEuODIyYy4yNC0uNzQyIDEuMjktLjc0MiAxLjUzMiAwbDEuMjM5IDMuODE1YS44MDYuODA2IDAgMDAuNzY2LjU1Nmg0LjAxMmMuNzggMCAxLjEwNC45OTguNDczIDEuNDU3bC0zLjI0NSAyLjM1OGEuODA0LjgwNCAwIDAwLS4yOTMuOWwxLjI0IDMuODE1Yy4yNC43NDMtLjYwOSAxLjM2LTEuMjQuOTAxbC0zLjI0NS0yLjM1OGEuODA1LjgwNSAwIDAwLS45NDYgMGwtMy4yNDYgMi4zNThjLS42MzEuNDU5LTEuNDgtLjE1OC0xLjI0LS45bDEuMjQxLTMuODE2YS44MDguODA4IDAgMDAtLjI5My0uOUw1MC41IDc3Ljg3MmMtLjYzMS0uNDU5LS4zMDctMS40NTcuNDc0LTEuNDU3aDQuMDExTTc3LjQ0NCAyMy41NGwuNTkzLTEuODIyYy4yNC0uNzQgMS4yOS0uNzQgMS41MzIgMGwxLjIzOSAzLjgxNmEuODA1LjgwNSAwIDAwLjc2Ni41NTZoNC4wMTJjLjc4IDAgMS4xMDUuOTk4LjQ3MyAxLjQ1NmwtMy4yNDYgMi4zNTlhLjgwNS44MDUgMCAwMC0uMjkzLjlsMS4yNCAzLjgxNmMuMjQyLjc0Mi0uNjA4IDEuMzU4LTEuMjM5LjlsLTMuMjQ1LTIuMzU4YS44MDUuODA1IDAgMDAtLjk0NiAwbC0zLjI0NiAyLjM1OGMtLjYzMS40NTgtMS40OC0uMTU4LTEuMjQtLjlsMS4yNC0zLjgxNmEuODA1LjgwNSAwIDAwLS4yOTItLjlsLTMuMjQ2LTIuMzU5Yy0uNjMtLjQ1OC0uMzA2LTEuNDU2LjQ3My0xLjQ1Nmg0LjAxMk02MC42NDMgMi42OTVsLjQ3MS0xLjQ1Yy4xOTEtLjU5IDEuMDI2LS41OSAxLjIxOCAwbC45ODYgMy4wMzVhLjY0LjY0IDAgMDAuNjA5LjQ0MmgzLjE5Yy42MjEgMCAuODc5Ljc5NC4zNzcgMS4xNTlsLTIuNTgxIDEuODc1YS42NC42NCAwIDAwLS4yMzMuNzE2bC45ODYgMy4wMzVjLjE5Mi41ODktLjQ4MyAxLjA4LS45ODUuNzE1bC0yLjU4Mi0xLjg3NmEuNjQuNjQgMCAwMC0uNzUyIDBsLTIuNTgyIDEuODc2Yy0uNTAyLjM2NC0xLjE3Ny0uMTI2LS45ODQtLjcxNWwuOTg1LTMuMDM1YS42MzkuNjM5IDAgMDAtLjIzMi0uNzE2bC0yLjU4Mi0xLjg3NWMtLjUwMi0uMzY1LS4yNDQtMS4xNTkuMzc2LTEuMTU5aDMuMTkybTkuNSA1MS45NDRjLTYuMzIzLS4yOC0xMS40MTYtNS41Mi0xMS41MjYtMTEuODVhMTIuMDMgMTIuMDMgMCAwMTEuMDI3LTUuMWMuOTA4LTIuMDUyLTEuNTc3LTMuOTE4LTMuMjU5LTIuNDMxYTE1LjA0NSAxNS4wNDUgMCAwMC01LjA5NSAxMS40ODhjLjA5NyA4LjAwNyA2LjU2NCAxNC42MjcgMTQuNTY2IDE0Ljg5N2ExNS4wNDMgMTUuMDQzIDAgMDAxMS4wMDUtNC4yMjVjMS42MDItMS41NDgtLjAxMy00LjIxNS0yLjExMi0zLjQ2NmExMi4wOSAxMi4wOSAwIDAxLTQuNjA1LjY4N3oiLz48L2c+PC9zdmc+"/>
                    <h3 className="banner2-content">Book 24/7</h3>
                    <p className="banner2-content-sub">Easily from bed or from the bus</p>
                   </div>
                </div>
            </div>
        </div>
        <div className="banner3">
        <div className="content1">
            <div>
            <img alt="img" src="https://cdn1.treatwell.net/images/view/v2.i3801473.w540.h192.xC88A8F66.jpg" width="100%" />
            <h2 className="content11">Our gift voucher</h2>
            <p className="content12">Always the right gift, right now! A promise for the future of some me-time.</p>
            <button className="content13">Learn more</button>
            </div>
        </div>
        <div className="content2">
            <div>
            <img alt="img" src="https://cdn1.treatwell.net/images/view/v2.i3642463.w540.h192.x8933B8B1.jpg" width="100%" />
            <h2 className="content21">Closure of the cosmetics, massage and nail salons</h2>
            <p className="content22">Here you will find the current measures and restrictions for your salon visit.</p>
            <button className="content23">Learn more</button>
            </div>
        </div>
    </div>
    <div className="banner4">
    <div className="banner21">
    <div>
            <h2 className="banner211">Always with you - our app for hairdressers & Beauty</h2>
            <p className="banner212">From the sofa, on the go or briefly in the office. Book and<br/>rebook hairdressing & beauty appointments.</p>
            <p className="banner213">Easy 24/7 via App.</p>
            <button className="banner214">Download now</button>
    </div>
    </div>
    <div className="banner22">
        <div>
            <img id="img1" alt="img" src="https://cdn1.treatwell.net/images/view/v2.i2527308.w499.h256.xCAA3AE27.svg" />
        </div>
    </div>
</div>
<div className="banner5">
<div className="banner31">
    <div className="banner31-sub">
        <h1 className="banner311">Do you have a hair or beauty salon?<br/>Go online.</h1>
        <p className="banner312">We help you to further expand your business (and customer base) with<br/>Treawell Connect - our easy-to-use salon software.</p>
        <button className="banner313">become a partner</button>
    </div>
</div>
<div className="banner32">
<div className="banner321">
        <img id="calendar" alt="img" src="https://c0.wallpaperflare.com/preview/447/146/446/calendar-notebook-diary-note.jpg"/>
</div>
</div>
</div>
<div className="footer1">
<h2 className="footer11">Popular cities</h2>
<div className="footer-sub">
    <ul>
        <li className="city1">Chennai</li>
        <li className="city2">Mumbai</li>
        <li className="city3">Bangalore</li>
        <li className="city4">Coimbatore</li>
    </ul>
<div className="footer-sub1">
    <ul>
        <li className="city5">Kolkata</li>
        <li className="city6">Kochi</li>
        <li className="city7">Lucknow</li>
        <li className="city8">Jaipur</li>
    </ul>
</div>
</div>
</div>
<div class="footer">
<ul className="footers1">
    <li class="footers-1">Contact</li>
    <li class="footers-2">Discover</li>
    <li class="footers-3">Business partner</li>
    <li class="footers-4">Companies</li>
</ul>
<ul className="footers2">
    <li class="footers-21">Customer help</li>
    <li class="footers-22">Treatment Guide</li>
    <li class="footers-23">Business partner</li>
    <li class="footers-24">about us</li>
</ul>
<ul className="footers3">
    <li class="footer-31">Help / contact</li>
    <li class="footer-32">Our blog</li>
    <li class="footer-33">Partner Help Centre</li>
    <li class="footer-34">Jobs</li>
</ul>

<div class="final-footer">
<div class="footer-column1">
<img id="apple" alt="img" src={apple1}/><br/>
<img id="playstore" alt="img" src={playstore}/>
</div>
<div class="footer-column2">
    <p class="footer21">Treatwell Gift Certificate</p>
    <p class="footer22">Impressum</p>
</div>
<div class="footer-column3">
    <p class="footer23">Newsletter Sign up</p>
    <p class="footer24">Cookie settings</p>
</div>
</div>
</div>
<div class="final-footer2">
<div class="underline">
    <div class="social-media-icons">
        <a  href="https://www.facebook.com/"><img className="facebook" alt="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjYxMyAzLjQ5OWgtLjM0NWMtLjE3LS4wNTEtLjQzNi0uMTE2LS43OTgtLjE5OGE0LjczNSA0LjczNSAwIDAwLTEuMDI4LS4xMjJjLS45MDMgMC0xLjUxOS4xNjctMS44NDUuNS0uMzI4LjMzMi0uNDkyLjk1My0uNDkyIDEuODYzdi4xMTZoMy41NXYzLjExNkg2LjI1OVYyMGgtNC40N1Y4Ljc3NEgwVjUuNjU4aDEuNzg4di0uMzk2YzAtMS43NTUuNDYtMy4wNyAxLjM3OS0zLjk0N0M0LjA4Ny40NCA1LjQ3OCAwIDcuMzQzIDBjLjY0NyAwIDEuMjUyLjAyNCAxLjgxNC4wNy41NjMuMDQ3IDEuMDQ3LjEwOSAxLjQ1Ni4xODVWMy41eiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"/></a>
        <a  href="https://www.facebook.com/instagram/"><img className="instagram" alt="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTEuOTU4IDEwLjIyOGMwLTEuMDc1LS44NzQtMS45NS0xLjk1LTEuOTUtMS4wNzUgMC0xLjk1Ljg3NS0xLjk1IDEuOTVzLjg3NSAxLjk1IDEuOTUgMS45NWMxLjA3NiAwIDEuOTUtLjg3NSAxLjk1LTEuOTVNMTQuMDYyIDMuMDgyYzAtLjMwMi4yNDctLjU1LjU1LS41NWgxLjY5N2MuMzAzIDAgLjU1LjI0OC41NS41NVY0Ljc4YzAgLjMwMi0uMjQ3LjU1LS41NS41NWgtMS42OTdhLjU1MS41NTEgMCAwMS0uNTUtLjU1VjMuMDgyek0xMC4wMDggNS41M2MxLjAxMyAwIDEuOTUuMzIzIDIuNzE5Ljg3SDE5LjgwMlY1LjAyMkE0Ljk1MSA0Ljk1MSAwIDAwMTQuODU2LjA3Nkg0Ljk1N0E0Ljk1MiA0Ljk1MiAwIDAwLjAxMSA1LjAyMlY2LjRINy4yOWE0LjY3MSA0LjY3MSAwIDAxMi43Mi0uODd6Ii8+PHBhdGggZD0iTTE0LjcwNiAxMC4yMjhhNC43MDMgNC43MDMgMCAwMS00LjY5OCA0LjY5OCA0LjcwMyA0LjcwMyAwIDAxLTQuNjk4LTQuNjk4YzAtLjcxMy4xNi0xLjM5LjQ0Ni0xLjk5NkguMDEydjYuNzdhNC45NTEgNC45NTEgMCAwMDQuOTQ1IDQuOTQ2aDkuODk5YTQuOTUxIDQuOTUxIDAgMDA0Ljk0Ni00Ljk0NnYtNi43N0gxNC4yNmMuMjg1LjYwNi40NDYgMS4yODMuNDQ2IDEuOTk2Ii8+PC9nPjwvc3ZnPg=="/></a>
        <a  href="https://in.pinterest.com/"><img className="pinterest" alt="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDBDNC40NzcgMCAwIDQuNDc3IDAgMTBjMCA0LjIzNiAyLjYzNiA3Ljg1NSA2LjM1NiA5LjMxMi0uMDg4LS43OTEtLjE2Ny0yLjAwNS4wMzQtMi44NjkuMTgyLS43OCAxLjE3My00Ljk3IDEuMTczLTQuOTdzLS4yOTktLjYtLjI5OS0xLjQ4NWMwLTEuMzkuODA2LTIuNDI5IDEuODEtMi40MjkuODUyIDAgMS4yNjUuNjQxIDEuMjY1IDEuNDA5IDAgLjg1OC0uNTQ3IDIuMTQtLjgyOSAzLjMzLS4yMzUuOTk1LjUgMS44MDcgMS40ODEgMS44MDcgMS43NzggMCAzLjE0NC0xLjg3NCAzLjE0NC00LjU4IDAtMi4zOTQtMS43Mi00LjA2OC00LjE3Ny00LjA2OC0yLjg0NSAwLTQuNTE2IDIuMTM0LTQuNTE2IDQuMzQgMCAuODYuMzMyIDEuNzguNzQ1IDIuMjgyYS4yOTkuMjk5IDAgMDEuMDY5LjI4N2MtLjA3Ni4zMTYtLjI0NS45OTUtLjI3OCAxLjEzNC0uMDQ0LjE4My0uMTQ1LjIyMS0uMzM0LjEzMy0xLjI1LS41OC0yLjAzLTIuNDA3LTIuMDMtMy44NzQgMC0zLjE1NCAyLjI5Mi02LjA1MSA2LjYwNy02LjA1MSAzLjQ3IDAgNi4xNjUgMi40NzIgNi4xNjUgNS43NzYgMCAzLjQ0Ni0yLjE3MyA2LjIyLTUuMTg5IDYuMjItMS4wMTMgMC0xLjk2Ni0uNTI3LTIuMjkyLTEuMTQ5bC0uNjIzIDIuMzc3Yy0uMjI2Ljg2OS0uODM1IDEuOTU4LTEuMjQzIDIuNjIyLjkzNi4yOSAxLjkzLjQ0NiAyLjk2MS40NDYgNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMxNS41MjMgMCAxMCAwIiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="/></a>
        <a  href="https://twitter.com/?lang=en"><img className="twitter" alt="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjY5MyA2LjA0NnMtLjU2NC00LjM2IDMuMjMtNS42OTJjMCAwIDMuMjMyLTEuMzM0IDUuMzg2IDEuMTggMCAwIDIuNTEzLS40MSAzLjA3Ni0xLjE4IDAgMC0uMTUzIDEuNTQ0LTEuODk3IDIuNjcgMCAwIDEuNTktLjAwMyAyLjcxNy0uNjE4IDAgMC0xLjU4NyAxLjk4NC0yLjI3MyAyLjI5Mi0uNzAxLjI3MS42ODMgNC43MzMtMy40NyAxMC4wMTUgMCAwLTMuMTQ4IDQuMjU3LTkuMDI2IDUuMDc3LTIuMzkuMzM0LTUuODk3LjYxNi05LjQzNi0yLjA1IDAgMCAzLjU5LjQ2IDcuMTgtMi4yMDYgMCAwLTMuNjkxLS4zMDgtNC41NjMtMy4zODUgMCAwIDEuNjkyIDAgMi4wNS0uMDUgMCAwLTMuOTQ4LTEuMzM1LTMuODk3LTUuMTA0IDAgMCAxLjMzMi41OSAyLjA3Ni41MTMgMCAwLTMuMzMzLTIuNDg4LTEuMzU5LTYuNTkgMCAwIDMuNTkgNS4wMjYgMTAuMjA2IDUuMTI4eiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"/></a>
        <a  href="https://www.youtube.com/"><i className="fa fa-youtube fb ylogo"></i></a>
        <a  href="https://www.linkedin.com/"><img className="linkedin" alt="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjA0MyAxNy4wNDJoLTIuOTY2di00LjY0MWMwLTEuMTA3LS4wMi0yLjUzLTEuNTQyLTIuNTMtMS41NDMgMC0xLjc3OSAxLjIwNS0xLjc3OSAyLjQ1djQuNzIxSDcuNzk0VjcuNDk4aDIuODQzdjEuMzA1aC4wNGMuMzk2LS43NSAxLjM2NC0xLjU0MiAyLjgwNy0xLjU0MiAzLjAwNCAwIDMuNTU5IDEuOTc2IDMuNTU5IDQuNTQ3djUuMjM0ek00LjQ0OSA2LjE5NGExLjcyIDEuNzIgMCAxMS0uMDAzLTMuNDM5IDEuNzIgMS43MiAwIDAxLjAwMyAzLjQzOXptMS40ODQgMTAuODQ4aC0yLjk3VjcuNDk4aDIuOTd2OS41NDR6TTE4LjUyIDBIMS40NzVDLjY2MSAwIDAgLjY0NiAwIDEuNDQydjE3LjExNUMwIDE5LjM1My42NjEgMjAgMS40NzUgMjBIMTguNTJjLjgxNiAwIDEuNDgtLjY0NyAxLjQ4LTEuNDQzVjEuNDQyQzIwIC42NDYgMTkuMzM1IDAgMTguNTIgMHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="/></a>
        <p class="copyright">© 2020 Treatwell DACH GmbH</p>
        </div>
        <div class="dropdown">
            <select name="coundries" id="countries">
            <option id="country" value="india">India</option>
            <option id="country" value="usa">Usa</option>
            <option id="country" value="france">france</option>
            <option id="country" value="dubai">Dubai</option>
            <option id="country" value="australia">Australia</option>
        </select>
        </div>
    </div>
    </div>
    </div>
    )}

export default Banner
