

# SubBusters

[SUBBUSTERS](http://subbusters.surge.sh/)
[SUBBUSTERS API](https://subbusters.herokuapp.com/api/subscriptions/)

## Project Overview

SubBusters is a subscription tracking website that allows users to create a visual log of current subscriptions. Users can create, view, update, and delete subscriptions, which are categorized for viewing by type and date due. Users are also able to visit external websites where they can cancel their subscriptions, if they choose. 

## Whimsical Diagram
[Whimsical](https://whimsical.com/RZmXX9ckcroVAwkvAWPSaj@VsSo8s35Uw4GTQzNygQqoh)

## Team Expectations 
[Team Expectations](https://docs.google.com/document/d/1YprgnRWCR1NIn8XgS9dgycLHxjdiYutliuyY2f4uc7E/edit?usp=sharing)

### MVP/PostMVP
#### MVP 
[Trello](https://trello.com/b/R5XTRx2G)

#### PostMVP  
- Welcome Page

## Schema

const Subscription = new Schema(
   {
    service: { type: String, required: true },
    category: { type: String, required: true },
    subscriptionType: { type: String, required: true },
    billingCycle: { type: String, required: true },
    autoRenew: { type: Boolean, required: true },
    amount: { type: String, required: true },
    dueDate: { type: String, required: true },
    logoURL: { type: String, required: true},
    URL: { type: String, required: true }
   },
    { timestamps: true }
)
​
const Example = 
{
    "service": "Netflix",
    "category": "Movies & TV",
    "subscription-type": "Subscription",
    "billing-cycle": "Monthly",
    "auto-renew": true,
    "amount": "14.99",
    "due-date": "25",
    "URL": "https://www.netflix.com/"
}
​
const subs = ["Netflix", "Hulu", "Apple TV", 
"HBO", "Amazon Prime", "Spotify", "iTunes", "Pandora", "Adobe", "Formstack"]
Collapse


