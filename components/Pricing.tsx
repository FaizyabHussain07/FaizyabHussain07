"use client"

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Basic Website',
    price: '$299',
    duration: 'one-time',
    description: 'Perfect for small businesses and personal portfolios',
    features: [
      'Responsive Design',
      'Up to 5 Pages',
      'Contact Form',
      'Basic SEO Setup',
      'Social Media Integration',
      '1 Month Support',
      'Mobile Optimized',
      'Basic Analytics'
    ],
    popular: false,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Professional Website',
    price: '$599',
    duration: 'one-time',
    description: 'Ideal for growing businesses and startups',
    features: [
      'Everything in Basic',
      'Up to 10 Pages',
      'Advanced SEO',
      'Blog Integration',
      'E-commerce Ready',
      '3 Months Support',
      'Performance Optimization',
      'Google Analytics',
      'SSL Certificate',
      'Content Management System'
    ],
    popular: true,
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'E-commerce Website',
    price: '$999',
    duration: 'one-time',
    description: 'Complete online store with payment processing',
    features: [
      'Everything in Professional',
      'Unlimited Products',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Management',
      'Customer Accounts',
      '6 Months Support',
      'Advanced Security',
      'Multi-language Support',
      'Custom Features'
    ],
    popular: false,
    color: 'from-green-500 to-green-600'
  }
]

const additionalServices = [
  {
    name: 'Website Maintenance',
    price: '$99',
    duration: 'per month',
    description: 'Regular updates, security patches, and performance monitoring'
  },
  {
    name: 'SEO Optimization',
    price: '$199',
    duration: 'per month',
    description: 'Search engine optimization to improve your website ranking'
  },
  {
    name: 'Content Creation',
    price: '$150',
    duration: 'per page',
    description: 'Professional content writing for your website pages'
  },
  {
    name: 'Custom Features',
    price: '$200',
    duration: 'per feature',
    description: 'Custom functionality tailored to your specific needs'
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include hosting setup and basic training.
          </p>
        </motion.div>

        {/* Main Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star size={16} className="mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-800 dark:text-slate-200">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    /{plan.duration}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full block text-center py-3 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Additional Services
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Need something specific? I offer additional services to enhance your website.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                {service.name}
              </h4>
              <div className="mb-3">
                <span className="text-2xl font-bold text-blue-600">
                  {service.price}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  /{service.duration}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Questions About Pricing?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific needs and create a custom quote that fits your budget and requirements.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Custom Quote
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 