interface TTask {
  name: string;
  id: string;
  date: Date; // ISO 8601
}

interface TUser {
  uid: string;
  notificationPermissionAsked: boolean;
}
