import "./styles/PurchaseCard.css";
import { useProjects } from "../context/ProjectContext";

export default function PurchaseCard({ projectId, price }) {
  const { role, addProject } = useProjects();

  const handleAddProject = () => {
    if (role !== "admin") return alert("Only admins can add projects");
    addProject({ id: projectId, price });
  };

  return (
    <div className="purchase-card">
      <div className="price">{price} ₹/project</div>
      <div className="action-buttons">
        {role === "admin" && (
          <button className="btnp btnp-primary" onClick={handleAddProject}>
            Add Project
          </button>
        )}
        <button className="btnp btn-secondary">Purchase Now</button>
      </div>
    </div>
  );
}
