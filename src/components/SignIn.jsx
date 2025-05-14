// SignIn.jsx
import { useState } from "react";
import { signIn } from "../services/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import toast from "react-hot-toast";

export default function SignIn({ onSuccess }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn(form);
      toast.success("Tizimga muvaffaqiyatli kirildi!");
      dispatch(
        setUser({
          user: res.data.firstName,
          token: res.data.accessToken,
        })
      );
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.firstName));
      onSuccess();
    } catch (err) {
      toast.error(err.response?.data?.message || "Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-xl font-bold">Tizimga kirish</h2>
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Foydalanuvchi nomi"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        className="w-full p-2 border rounded"
        type="password"
        placeholder="Parol"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button
        type="submit"
        className="bg-[#134E9B] text-white px-4 py-2 rounded hover:bg-white hover:text-[#134E9B] border border-[#134E9B]"
        disabled={loading}
      >
        {loading ? "Kirilmoqda..." : "Kirish"}
      </button>
    </form>
  );
}
