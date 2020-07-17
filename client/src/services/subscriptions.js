import api from './apiConfig'

export const getSubscriptions = async () => {
  try {
      const response = await api.get('/subscriptions')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getSubscription = async id => {
  try {
      const response = await api.get(`/subscriptions/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createSubscription = async subscription => {
  try {
      const response = await api.post('/subscriptions', subscription)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateSubscription = async (id, subscription) => {
  try {
      const response = await api.put(`/subscriptions/${id}`, subscription)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteSubscription = async id => {
  try {
      const response = await api.delete(`/subscriptions/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}