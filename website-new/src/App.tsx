import "./App.css";

const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      monthly: "$0/mo",
      features: [
        "1 environment (Preview or Production)",
        "1 Project",
        "Basic DDoS protection",
        "Community support",
      ],
    },
    {
      name: "Team",
      monthly: "$39/mo",
      features: [
        "Up to 5 environments (Preview, QA, Staging, Prod)",
        "Up to 5 Projects",
        "Advanced DDoS protection",
        "Priority email support",
      ],
    },
    {
      name: "Enterprise",
      monthly: "Custom pricing",
      features: [
        "Unlimited environments & projects",
        "24/7 dedicated support",
        "Audit logs & SLA guarantee",
        "Custom integrations and AI workflows",
      ],
    },
  ];

  return (
    <div className="pricing-page">
      <header className="header">
        <h1>ABC Cloud Platform</h1>
        <p>Deploy, scale, and manage your cloud-native apps with ease.</p>
      </header>

      <section className="hero">
        <h2>Choose the Right Plan for Your Team</h2>
        <p>
          Flexible pricing that scales with your business — from individual
          developers to enterprise-level teams.
        </p>
      </section>

      <section className="pricing-section">
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Monthly Price</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.name}>
                <td className="plan-name">{plan.name}</td>
                <td className="plan-price">{plan.monthly}</td>
                <td>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="cta-section">
        <h3>Start Your Cloud Journey Today 🚀</h3>
        <button className="cta-button">Get Started for Free</button>
      </section>
    </div>
  );
};

export default PricingPage;
