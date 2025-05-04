'use client';

import { useState } from 'react';

interface Event {
  date: number;
  month: number;
  year: number;
  title: string;
  type: string;
  color: string;
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Helper to generate all dates in a range
  function getDateRange(start: Date, end: Date) {
    const dates = [];
    let current = new Date(start);
    while (current <= end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return dates;
  }

  const eventDefs = [
    {
      title: 'Искусство без границ',
      color: 'bg-red-500',
      start: new Date(2025, 4, 29), // 29 мая 2025
      end: new Date(2025, 5, 5),   // 5 июня 2025
    },
    {
      title: 'Amor Amor',
      color: 'bg-pink-500',
      start: new Date(2025, 1, 13), // 13 февраля 2025
      end: new Date(2025, 1, 20),   // 20 февраля 2025
    },
    {
      title: 'Современный абстракционизм',
      color: 'bg-blue-500',
      start: new Date(2024, 2, 15), // 15 марта 2024
      end: new Date(2024, 3, 15),   // 15 апреля 2024
    },
    {
      title: 'Урбан-арт: Городские истории',
      color: 'bg-green-500',
      start: new Date(2024, 2, 20), // 20 марта 2024
      end: new Date(2024, 3, 10),   // 10 апреля 2024
    },
    {
      title: 'Цифровые горизонты',
      color: 'bg-purple-500',
      start: new Date(2024, 2, 25), // 25 марта 2024
      end: new Date(2024, 3, 15),   // 15 апреля 2024
    },
    {
      title: 'Лица эпохи',
      color: 'bg-yellow-500',
      start: new Date(2024, 3, 1), // 1 апреля 2024
      end: new Date(2024, 3, 20),  // 20 апреля 2024
    },
    {
      title: 'Пространство формы',
      color: 'bg-orange-500',
      start: new Date(2024, 3, 5), // 5 апреля 2024
      end: new Date(2024, 3, 25),  // 25 апреля 2024
    },
    {
      title: 'Экспериментальные грани',
      color: 'bg-indigo-500',
      start: new Date(2024, 3, 10), // 10 апреля 2024
      end: new Date(2024, 3, 30),  // 30 апреля 2024
    },
  ];

  // Generate all event days
  const events: Event[] = eventDefs.flatMap(ev => {
    return getDateRange(ev.start, ev.end).map(date => ({
      date: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      title: ev.title,
      type: 'exhibition',
      color: ev.color,
    }));
  });

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);
  const days = Array.from({ length: 42 }, (_, i) => {
    const dayNumber = i - firstDayOfMonth + 1;
    const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
    const date = isCurrentMonth ? dayNumber : null;
    
    return {
      date,
      isCurrentMonth,
      events: events.filter(event => 
        event.date === date && 
        event.month === currentDate.getMonth() + 1 &&
        event.year === currentDate.getFullYear()
      )
    };
  });

  return (
    <div className="bg-black rounded-xl shadow-lg p-8">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={handlePrevMonth}
          className="text-white hover:text-red-500 transition p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-2xl font-bold text-white">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        <button 
          onClick={handleNextMonth}
          className="text-white hover:text-red-500 transition p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {/* Calendar Header */}
        <div className="col-span-7 grid grid-cols-7 gap-2 mb-4">
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
            <div key={day} className="text-center text-gray-400 font-semibold">
              {day}
            </div>
          ))}
        </div>
        {/* Calendar Days */}
        <div className="col-span-7 grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <div
              key={index}
              className={`aspect-square p-2 border border-white/10 rounded-lg hover:bg-white/5 transition cursor-pointer relative ${
                !day.isCurrentMonth ? 'opacity-30' : ''
              }`}
            >
              {day.date && (
                <>
                  <div className="text-white text-sm">{day.date}</div>
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={`absolute bottom-1 left-1 right-1 h-1 ${event.color} rounded-full`}
                      title={event.title}
                    />
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Event Legend */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: 'Искусство без границ', color: 'bg-red-500' },
          { title: 'Amor Amor', color: 'bg-pink-500' },
          { title: 'Современный абстракционизм', color: 'bg-blue-500' },
          { title: 'Урбан-арт: Городские истории', color: 'bg-green-500' },
          { title: 'Цифровые горизонты', color: 'bg-purple-500' },
          { title: 'Лица эпохи', color: 'bg-yellow-500' },
          { title: 'Пространство формы', color: 'bg-orange-500' },
          { title: 'Экспериментальные грани', color: 'bg-indigo-500' },
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
            <span className="text-gray-300 text-sm">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 