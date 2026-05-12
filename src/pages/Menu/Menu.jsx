import { useState } from 'react'
import { Layout } from '../../components/layout'
import { Card, Button, Modal } from '../../components/common'
import { menuItems, menuCategories } from '../../data'
import styles from './Menu.module.css'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [formData, setFormData] = useState({ name: '', price: '', category: 'Mains', description: '' })

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory)

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingItem(item)
      setFormData({ name: item.name, price: item.price, category: item.category, description: item.description })
    } else {
      setEditingItem(null)
      setFormData({ name: '', price: '', category: 'Mains', description: '' })
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingItem(null)
    setFormData({ name: '', price: '', category: 'Mains', description: '' })
  }

  const handleSaveItem = () => {
    // In a real app, this would call an API
    console.log('Saving item:', editingItem ? 'edit' : 'create', formData)
    handleCloseModal()
  }

  return (
    <Layout title="Menu Management" subtitle="Edit and organize your menu">
      {/* Category Filter and Add Button */}
      <div className={styles.controls}>
        <div className={styles.categoryFilter}>
          {menuCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <Button variant="primary" onClick={() => handleOpenModal()}>
          + Add New Item
        </Button>
      </div>

      {/* Menu Items Grid */}
      <div className={styles.grid}>
        {filteredItems.map((item) => (
          <Card key={item.id} className={styles.menuCard} hoverable>
            <div className={styles.cardImage}>
              <div className={styles.imagePlaceholder}>🍽️</div>
            </div>
            <div className={styles.cardContent}>
              <h4 className={styles.itemName}>{item.name}</h4>
              <p className={styles.itemCategory}>{item.category}</p>
              <p className={styles.itemDescription}>{item.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.price}>${item.price}</span>
                <div className={styles.actions}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleOpenModal(item)}
                  >
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => console.log('Delete', item.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add/Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={editingItem ? 'Edit Item' : 'Add New Item'} size="md">
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleSaveItem(); }}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Item Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={styles.input}
              required
              placeholder="e.g., Margherita Pizza"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Price</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className={styles.input}
              required
              placeholder="0.00"
              step="0.01"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className={styles.input}
            >
              <option>Starters</option>
              <option>Mains</option>
              <option>Desserts</option>
              <option>Drinks</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className={styles.input}
              placeholder="Item description..."
              rows="3"
            />
          </div>

          <div className={styles.formActions}>
            <Button type="button" variant="ghost" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {editingItem ? 'Update Item' : 'Add Item'}
            </Button>
          </div>
        </form>
      </Modal>
    </Layout>
  )
}

export default Menu
