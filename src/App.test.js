import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  describe('render', () => {
    let renderedApp
    beforeEach(() => {
      renderedApp = render(<App />)
    })
    it('should show the number of items in the cart in the header', () => {
      const itemsInCart = '3'
      const itemsCount = renderedApp.getByTestId('items-count')
      expect(itemsCount.textContent).toBe(itemsInCart)
    })

    it('should show the breadcrumb and the title', () => {
      const breadcrumbText = 'Home → Checkout'
      const titleText = 'Your Cart'
      const breadcrumbItem = renderedApp.getByTestId('breadcrumb')
      const titleItem = renderedApp.getByTestId('title')
      expect(breadcrumbItem.textContent).toBe(breadcrumbText)
      expect(titleItem.textContent).toBe(titleText)
    })

    it('should render the table of the product in the cart', () => {
      const numberOfRows = 3
      const numberOfColumns = 5
      const table_header_columns = renderedApp.container.querySelector(
        '.thead .tr'
      )
      const table_body_rows = renderedApp.container.querySelector('.tbody ')
      expect(table_header_columns.children.length).toBe(numberOfColumns)
      expect(table_body_rows.children.length).toBe(numberOfRows)
    })

    it('should render the footer section with the cta', () => {
      const footerSection = renderedApp.getByTestId('footer')
      const checkoutButton = renderedApp.getByTestId('checkout')
      expect(footerSection).toBeInTheDocument()
      expect(checkoutButton).toBeInTheDocument()
    })
  })

  describe('actions', () => {
    let renderedApp
    beforeEach(() => {
      renderedApp = render(<App />)
    })
    it('should remove an item', () => {
      fireEvent.click(renderedApp.getByTestId('remove-item-0'))

      expect(renderedApp.getByTestId('items-count').textContent).toBe('2')
    })

    it('should remove all the items', () => {
      fireEvent.click(renderedApp.getByTestId('remove-item-0'))
      fireEvent.click(renderedApp.getByTestId('remove-item-0'))
      fireEvent.click(renderedApp.getByTestId('remove-item-0'))

      expect(renderedApp.getByTestId('items-count').textContent).toBe('0')
      expect(renderedApp.queryByTestId('remove-item-0')).not.toBeInTheDocument()
    })

    it('should update the quantity of the item', () => {
      fireEvent.change(renderedApp.getByTestId('quantity-item-0'), {
        target: { value: '3' }
      })

      fireEvent.click(renderedApp.getByTestId('update-quantity-0'))

      expect(renderedApp.getByTestId('items-count').textContent).toBe('5')
    })

    it('should update the total when the quantity changes', () => {
      fireEvent.change(renderedApp.getByTestId('quantity-item-0'), {
        target: { value: '3' }
      })

      fireEvent.click(renderedApp.getByTestId('update-quantity-0'))

      expect(renderedApp.getByTestId('sub-total').textContent).toBe('$4996')
    })

    it('should update the total when an item gets removed', () => {
      fireEvent.click(renderedApp.getByTestId('remove-item-0'))

      expect(renderedApp.getByTestId('sub-total').textContent).toBe('$496')
    })

    it('should update the additional comments', () => {
      fireEvent.change(renderedApp.getByTestId('additional-comments'), {
        target: { value: 'test' }
      })

      expect(renderedApp.getByTestId('additional-comments').textContent).toBe(
        'test'
      )
    })
  })
})
