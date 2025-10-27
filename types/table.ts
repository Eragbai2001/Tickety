export interface RecentPayoutRequestType {
    id: number;
    organizer: string;
    amount: string;
    requestedOn: string;
    status: string;
    processedOn: string;
}

export interface UsersType {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    role: string;
    status: string;
}

export interface RecentEventSubmissionsType {
    id: number;
    title: string;
    organizer: string;
    category: string;
    status: string;
    ticketsSold: number;
    startDate: string;
}

export interface CategoriesType {
    id: number;
    categoryName: string;
    slug: string;
    eventsCount: number;
    status: string;
}

export interface RecentTransactionsType {
    id: number;
    name: string;
    email: string;
    ticketType: string;
    purchaseDate: string;
    checkInStatus: string;
}

export interface UpcomingEventsType {
    id: number;
    eventName: string;
    dateAndTime: string;
    status: string;
    ticketsSold: string;
}

export interface EventsTableType {
    id: number;
    eventName: string;  
    dateAndTime: string;
    status: string;
    ticketsSold: number;
    revenue: string;
}

export interface TicketsTableType {
    id: number;
    ticketName: string;
    price: string;
    quantity: string;
    sold: string;
    salesStatus: string;
    visibility: string;
}

export interface AttendeeListTableType {
    id: number;
    name: string;
    email: string;
    ticketType: string;
    purchaseDate: string;
    checkInStatus: string;
}

export interface PromotionsTableType {
    id: number;
    code: string;
    discount: string;
    used: string;
    expiryDate: string;
    status: string;
}

export interface EarningsTableType {
    id: number;
    eventName: string;
    ticketsSold: string;
    revenue: string;
    platformFee: string;
    netEarnings: string;
    status: string;
}

export interface ReviewsTableType {
    id: number;
    attendeeName: string;
    eventName: string;
    rating: number;
    reviewText: string;
    date: string;
    visibility: string;
}