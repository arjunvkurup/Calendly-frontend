import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import NavBar from "../layout/NavBar";
import { INITIAL_EVENTS, createEventId } from "./events";
import './scheduler.css';

export default class Scheduler extends React.Component {

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
                // allDay: selectInfo.allDay
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

    renderSidebarEvent = (event) => {
        return (
            <li key={event.id}>
                <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
                <i>{event.title}</i>
            </li>
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
            </div>
        )
    }
}