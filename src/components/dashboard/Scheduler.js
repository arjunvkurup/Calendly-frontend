import React from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import NavBar from "../layout/NavBar";
import { INITIAL_EVENTS, createEventId } from "./events";
import ConfirmModal from './ConfirmModal';
import './scheduler.css';
import axios from "axios";

export default class Scheduler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            id: '',
            start: '',
            end: '',
            currentEvents: []
        }
    }

    fetchData = (e) => {
        e.preventDefault();
        axios.get('http://127.0.0.1:8000/api/v1/')
            .then(function (response) {
                this.setState({currentEvents: response.data});

            })
            .catch(function (error) {
                console.log(error.response);
            });
        }

    handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }

    handleEvents = (events) => {
        this.setState({
            currentEvents: events
        })
    }

    handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
            })
        }
    }

    renderEventContent = (eventInfo) => {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        )
    }

    handleDateClick = (arg) => {
        alert(arg.dateStr)
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="demo-app-main">
                    <h1>Choose a schedule time</h1>

                    <FullCalendar
                        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                        headerToolbar={{
                            left: 'title',
                            center: '',
                            right: 'today timeGridWeek,dayGridMonth prev,next'
                        }}
                        initialView="timeGridWeek"
                        initialEvents= {INITIAL_EVENTS}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        select={this.handleDateSelect}
                        eventContent={this.renderEventContent}
                        dateClick={this.handleDateClick}
                        eventClick={this.handleEventClick}
                        eventsSet={this.handleEvents}
                    />
                </div>
                <ConfirmModal />
            </div>
        )
    }
}