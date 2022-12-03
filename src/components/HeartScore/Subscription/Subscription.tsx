import { Component } from 'react'
import { SubscriptionForm } from './SubscriptionForm'

export class Subscription extends Component {
  render() {
    return (
      <div className="pb-10 text-white">
        <h1 className="text-2xl font-semibold">Patient Data and Confidentiality</h1>
        <p className="mt-5 text-[17px] font-bold">
          Adesso is a journey to a healthy heart and life. The journey is a daily one and requires setting intentions towards your habits and goals. We recommend setting reminders to help you check in
          on how you are doing.
        </p>
        <p className="my-6 text-[17px] font-bold">Please select your preferred notification settings to help encourage your growth.</p>
        <SubscriptionForm />
      </div>
    )
  }
}
