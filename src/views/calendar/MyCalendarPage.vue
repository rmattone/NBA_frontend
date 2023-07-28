<template>
  <b-row>
    <b-col sm="3" class="mb-3">
      <VCalendar trim-weeks :first-day-of-week="0" expanded :attributes="events" @dayclick="handleDayClick" :step="1"> </VCalendar>
    </b-col>
    <b-col sm="9">
      <b-row>
        <EventCard :event="event" :arr-fn="fnCallbacks" v-for="event in arrEventsForDay" :key="event.id" :item="event"></EventCard>
        <b-alert variant="warning rounded-0" show v-if="arrEventsForDay.length == 0" class="text-center">
          <span> Nenhum evento para o dia </span>
        </b-alert>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { ref, onMounted, reactive } from 'vue'
import { fetchListEvents } from '@/api/calendar/calendar'
import EventCard from '@/components/ofekCustom/EventCard.vue'
import { getColorByEventCategory } from '@/ofekUtil/colorUtil.ts'

export default {
  name: 'MyCalendar',
  components: {
    EventCard
  },
  setup() {
    const listQuery = {}
    const selectedDate = ref(new Date())
    const events = ref([])
    const arrEventsForDay = reactive([])

    const fnCallbacks = [forceReloadDate, updateList]

    function getEventForDate(date) {
      fetchListEvents({ date: date, bWithDetails: 1 }).then((response) => handleEventsForDay(response))
    }

    function handleEventsForDay(objDay) {
      if (!objDay) {
        return
      }
      arrEventsForDay.splice(0)
      objDay.forEach((el) => arrEventsForDay.push(el))
    }

    const handleDayClick = (date) => {
      selectedDate.value = date
      getEventForDate(date.id)
    }

    function forceReloadDate() {
      handleDayClick(selectedDate.value)
    }

    function handleListEvent(objEvents) {
      events.value.splice(0)
      objEvents.forEach((newEvent) => {
        const date = new Date(newEvent.date)
        date.setDate(date.getDate() + 1)

        const eventData = {
          key: newEvent.eventId,
          bar: newEvent.bSubscribed ? getColorByEventCategory(18) : getColorByEventCategory(newEvent.eventCategoryId),
          dates: date
        }
        events.value.push(eventData)
      })
    }

    function updateList() {
      fetchListEvents(listQuery).then((response) => handleListEvent(response))
    }

    onMounted(() => {
      updateList()
    })

    return {
      fnCallbacks,
      handleEventsForDay,
      handleDayClick,
      getEventForDate,
      forceReloadDate,
      updateList,
      selectedDate,
      events,
      arrEventsForDay
    }
  }
}
</script>
