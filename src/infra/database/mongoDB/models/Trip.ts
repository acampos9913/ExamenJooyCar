import { Schema, SchemaTypes, model, models } from 'mongoose'

import { TripModel } from '@/core/models'

const tripSchema = new Schema<TripModel>(
  {
    id: {
      type: String,
      required: true,
    },
    start: {
      time: {
        type: Number,
        required: true,
      },
      lat: {
        type: Number,
        required: true,
      },
      lon: {
        type: Number,
        required: true,
      },
      address: {
        type: String,
        required: true,
      }
    },
    end: {
      time: {
        type: Number,
        required: true,
      },
      lat: {
        type: Number,
        required: true,
      },
      lon: {
        type: Number,
        required: true,
      },
      address: {
        type: String,
        required: true,
      }
    },
    distance: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    overspeedsCount: {
      type: Number,
      required: true,
    },
    boundingBox:
    [
      {
        lat: {
          type: Number,
          required: true,
        },
        lon: {
          type: Number,
          required: true,
        }
      }
    ]
  }
)

export const Trip =
  models['Trip'] ||
  model('Trip', tripSchema)
