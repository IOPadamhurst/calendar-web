import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import Calendars from './Calendars'
import Contacts from './Contacts'

class SettingsPage extends Component {
  render() {
    const { CalendarsContent, ContactsContent, handleHide } = this.props
    return (
      <div
        className="bodyContainer"
        style={{ textAlign: 'left', marginTop: '10px' }}
      >
        <h4>Settings</h4>

        {CalendarsContent}
        {ContactsContent}
        <Button onClick={handleHide}>Done</Button>
      </div>
    )
  }
}

export default class Settings extends Component {
  render() {
    const {
      // show,
      handleHide,
      calendars,
      addCalendarUrl,
      contacts,
      addCalendar,
      deleteCalendars,
      setCalendarData,
      lookupContacts,
      addContact,
      deleteContacts,
      followContact,
      unfollowContact,
      user,
      verifyNewCalendar,
      verifiedNewCalendarData,
    } = this.props
    const CalendarsContent = (
      <div>
        <Calendars
          items={calendars}
          addItem={addCalendar}
          deleteItems={deleteCalendars}
          setItemData={setCalendarData}
          valueOfAdd={addCalendarUrl}
          user={user}
          verifyNewCalendar={verifyNewCalendar}
          verifiedNewCalendarData={verifiedNewCalendarData}
        />
      </div>
    )

    const ContactsContent = (
      <div>
        <Contacts
          items={Object.values(contacts || {})}
          lookupContacts={lookupContacts}
          addItem={addContact}
          deleteItems={deleteContacts}
          followItem={followContact}
          unfollowItem={unfollowContact}
          user={user}
          calendars={calendars}
        />
      </div>
    )

    return (
      <SettingsPage
        CalendarsContent={CalendarsContent}
        ContactsContent={ContactsContent}
        handleHide={handleHide}
      />
    )
  }
}
