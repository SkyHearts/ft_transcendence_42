from django.urls import path, include
from rest_framework.routers import DefaultRouter
from friend.views import (FriendListViewSet, FriendRequestViewSet, accept_request, unfriend, cancel_or_decline, outgoing_friendrequest)

router = DefaultRouter()
router.register('friend_list', FriendListViewSet)
router.register('friend_request', FriendRequestViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('accept/', accept_request, name="accept"),
    path('unfriend/', unfriend, name='unfriend'),
    path('decline/', cancel_or_decline, name="decline"),
    path('cancel/', cancel_or_decline, name='cancel'),
    path('sent_request/', outgoing_friendrequest, name='outgoing_friendrequest'),
]